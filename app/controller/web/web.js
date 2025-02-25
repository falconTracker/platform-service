'use strict';

const Controller = require('egg').Controller;

class WebController extends Controller {
  // 新增系统
  async webaddsystem() {
    const { ctx } = this;
    await ctx.render('web/addsystem', {
      data: {
        title: '新增系统',
      },
    });
  }

  // 浏览器端首页
  async webhome() {
    const { ctx } = this;
    await ctx.render('web/home', {
      data: {
        title: '数据分析',
      },
    });
  }

  // 访问页面性能数据
  async webpagesavg() {
    const { ctx } = this;
    await ctx.render('web/pagesavg', {
      data: {
        title: '页面性能列表',
      },
    });
  }

  // 单页面访问页面列表性能
  async webpageslist() {
    const { ctx } = this;
    await ctx.render('web/pageslist', {
      data: {
        title: '单页面平均性能列表',
      },
    });
  }

  async webpagedetails() {
    const { ctx } = this;
    await ctx.render('web/pagedetails', {
      data: {
        title: '单页面详情数据',
      },
    });
  }

  // 慢页面列表
  async webslowpageslist() {
    const { ctx } = this;
    await ctx.render('web/slowpageslist', {
      data: {
        title: '页面性能数据列表',
      },
    });
  }

  // ajax请求平均性能数据
  async webajaxavg() {
    const { ctx } = this;
    await ctx.render('web/ajaxavg', {
      data: {
        title: '接口请求性能列表',
      },
    });
  }

  // ajax详情
  async webajaxdetail() {
    const { ctx } = this;
    await ctx.render('web/ajaxdetail', {
      data: {
        title: '接口请求详情列表',
      },
    });
  }

  async webajaxitemdetail() {
    const { ctx } = this;
    await ctx.render('web/ajaxitemdetail', {
      data: {
        title: '单接口详情信息',
      },
    });
  }

  // 慢资源列表
  async webresourceavg() {
    const { ctx } = this;
    await ctx.render('web/resourcesavg', {
      data: {
        title: '慢资源列表',
      },
    });
  }

  // 慢资源详情
  async webresourcedetail() {
    const { ctx } = this;
    await ctx.render('web/resourcesdetail', {
      data: {
        title: '资源平均性能',
      },
    });
  }

  async webresourcesitemdetail() {
    const { ctx } = this;
    await ctx.render('web/resourcesitemdetail', {
      data: {
        title: '单资源详情',
      },
    });
  }

  // 错误分类列表
  async weberroravg() {
    const { ctx } = this;
    await ctx.render('web/erroravg', {
      data: {
        title: '错误统计',
      },
    });
  }

  // 错误详情列表
  async weberrordetail() {
    const { ctx } = this;
    await ctx.render('web/errordetail', {
      data: {
        title: '错误列表',
      },
    });
  }
  // 错误页面详情信息
  async weberroritemdetail() {
    const { ctx } = this;
    await ctx.render('web/erroritemdetail', {
      data: {
        title: '错误详情',
      },
    });
  }
  // web设置界面
  async websetting() {
    const { ctx } = this;
    await ctx.render('web/setting', {
      data: {
        title: '系统设置',
      },
    });
  }

  // TOP分析
  async webtop() {
    const { ctx } = this;
    await ctx.render('web/top', {
      data: {
        title: 'TOP分析',
      },
    });
  }
}

module.exports = WebController;
