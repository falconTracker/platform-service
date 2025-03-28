'use strict';

const Controller = require('egg').Controller;

class EnfironmentController extends Controller {
  // 获得用户系统、地址位置、浏览器分类
  async getDataGroupBy() {
    const { ctx } = this;
    const query = ctx.request.query;
    const appId = query.appId;
    const beginTime = query.beginTime;
    const endTime = query.endTime;
    const type = query.type || 1;
    const url = query.url;

    if (!appId) throw new Error('页面性能列表：appId不能为空');
    if (!url) throw new Error('页面性能列表：url不能为空');

    const result = await ctx.service.web.environment.getDataGroupBy(
      type,
      url,
      appId,
      beginTime,
      endTime
    );

    ctx.body = this.app.result({
      data: result,
    });
  }

  // 根据request_id获得用户系统信息
  async getEnvironmentForPage() {
    const { ctx } = this;
    const query = ctx.request.query;
    const appId = query.appId;
    const requestId = query.requestId;

    if (!appId) { throw new Error('根据request_id获得用户系统信息：appId不能为空'); }
    if (!requestId) { throw new Error('根据request_id获得用户系统信息：requestId不能为空'); }

    const result = await ctx.service.web.environment.getEnvironmentForPage(
      appId,
      requestId
    );

    ctx.body = this.app.result({
      data: result,
    });
  }
}

module.exports = EnfironmentController;
