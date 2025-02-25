'use strict';
const Controller = require('egg').Controller;

class AnalysisController extends Controller {
  // top datas
  async getTopDatas() {
    const { ctx } = this;
    const query = ctx.request.query;
    const appId = query.appId;
    const beginTime = query.beginTime;
    const endTime = query.endTime;
    const type = query.type || 1;
    if (!appId) throw new Error('top页面：appId不能为空');

    const result = await ctx.service.web.analysis.getTopDatas(
      appId,
      beginTime,
      endTime,
      type
    );
    ctx.body = this.app.result({
      data: result,
    });
  }

  // top datas
  async getProvinceAvgCount() {
    const { ctx } = this;
    const query = ctx.request.query;
    const appId = query.appId;
    const beginTime = query.beginTime;
    const endTime = query.endTime;
    const type = query.type || 1;
    if (!appId) throw new Error('top页面：appId不能为空');

    const result = await ctx.service.web.analysis.getProvinceAvgCount(
      appId,
      beginTime,
      endTime,
      type
    );
    ctx.body = this.app.result({
      data: result,
    });
  }
}

module.exports = AnalysisController;
