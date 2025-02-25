"use strict";

const config = {
  // 登陆页面
  loginUrl: '/login',

  // 登陆成功后需要跳转到的页面
  homeUrl: '/',

  // 根接口
  baseApi: '/api/v0.0.1/',

  // ajax 请求超时时间
  ajaxtimeout: 15000,

  // pagesize 分页数量
  pageSize: 50,
};

window.config = config; // eslint-disable-line
