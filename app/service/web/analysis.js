'use strict';

const Service = require('egg').Service;

class AnalysisService extends Service {
  // TOP datas
  async getTopDatas(appId, beginTime, endTime, type) {
    type = type * 1;
    let result = {};
    if (type === 1) {
      const pages = Promise.resolve(
        this.getRealTimeTopPages(appId, beginTime, endTime)
      );
      const browser = Promise.resolve(
        this.getRealTimeTopBrowser(appId, beginTime, endTime)
      );
      const province = Promise.resolve(
        this.getRealTimeTopProvince(appId, beginTime, endTime)
      );
      const all = await Promise.all([ pages, browser, province ]);
      result = {
        top_pages: all[0],
        top_browser: all[1],
        provinces: all[2],
      };
    } else if (type === 2) {
      result = (await this.getDbTopAnalysis(appId, beginTime, endTime)) || {};
    }
    return result;
  }

  // 历史 top
  // 需要等待每日数据更新
  async getDbTopAnalysis(appId, beginTime, endTime) {
    const data = await this.ctx.model.Web.WebStatis.findOne({
      app_id: appId,
      create_time: { $gte: new Date(beginTime), $lte: new Date(endTime) },
    })
      .read('sp')
      .exec();
    if (data) return data;

    return {};
  }

  // top 页面
  async getRealTimeTopPages(appId) {
    const result = await this.app.redis.get(`${appId}_top_pages_realtime`);
    // TODO 确定最终数据
    return result ? JSON.parse(result) : {};
  }

  // top浏览器排行
  async getRealTimeTopBrowser(appId) {
    const result = await this.app.redis.get(`${appId}_top_browser_realtime`);
    // TODO 确定最终数据
    return result ? JSON.parse(result) : {};
  }

  // top省市排行榜
  async getRealTimeTopProvince(appId) {
    const result = await this.app.redis.get(`${appId}_top_province_realtime`);
    // TODO 确定最终数据
    return result ? JSON.parse(result) : {};
  }

  // 省份流量统计
  async getProvinceAvgCount(appId, beginTime, endTime, type) {
    if (type) type = type * 1;
    if (type === 1) {
      const res = await this.app.redis.get(`${appId}_top_province_realtime`);
      // TODO 确定最终数据
      return { provinces: res ? JSON.parse(res) : {} };
    } else if (type === 2) {
      return await this.getDbTopAnalysis(appId, beginTime, endTime);
    }
  }
}

module.exports = AnalysisService;
