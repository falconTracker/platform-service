'use strict';
const version = require('../../../package.json').version;

module.exports = (app) => {
  const apiRouter = app.router.namespace(`/api/v${version}/`);
  const { controller, middleware } = app;
  const { pvuvip, pages, environment, ajax, resource, error, analysis } =
    controller.api.web;

  // 校验用户是否登录中间件
  const tokenRequired = middleware.tokenRequired();

  // ----------------pv uv ip---------------
  // 获得实时统计概况
  apiRouter.get(
    'pvuvip/getPvUvIpSurvey',
    tokenRequired,
    pvuvip.getPvUvIpSurvey
  );
  // 获得某日统计概况
  apiRouter.get(
    'pvuvip/getPvUvIpSurveyOne',
    tokenRequired,
    pvuvip.getPvUvIpSurveyOne
  );
  // 实时获取pv uv ip信息 （多条数据）
  apiRouter.post('pvuvip/getPvUvIpList', tokenRequired, pvuvip.getPvUvIpList);
  // 实时获取pv uv ip信息 （单条数据）
  apiRouter.post('pvuvip/getPvUvIpOne', tokenRequired, pvuvip.getPvUvIpOne);
  // 获得历史pvuvip统计列表
  apiRouter.get(
    'pvuvip/getHistoryPvUvIplist',
    tokenRequired,
    pvuvip.getHistoryPvUvIplist
  );

  // top list
  apiRouter.get('analysis/getTopDatas', tokenRequired, analysis.getTopDatas);
  // 省总访问量排行
  apiRouter.get(
    'analysis/getProvinceAvgCount',
    tokenRequired,
    analysis.getProvinceAvgCount
  );

  // ----------------页面性能分析---------------
  // 平均列表
  apiRouter.get(
    'pages/getAveragePageList',
    tokenRequired,
    pages.getAveragePageList
  );
  // 单个页面性能列表
  apiRouter.get('pages/getOnePageList', tokenRequired, pages.getOnePageList);
  // 单个页面详情
  apiRouter.get('pages/getPageDetails', tokenRequired, pages.getPageDetails);

  // ----------------用户系统位置ip等信息---------------
  // 获得用户系统、地址位置、浏览器分类
  apiRouter.get(
    'environment/getDataGroupBy',
    tokenRequired,
    environment.getDataGroupBy
  );
  // 根据request_id获得用户系统信息
  apiRouter.get(
    'environment/getEnvironmentForPage',
    tokenRequired,
    environment.getEnvironmentForPage
  );

  // -------------------ajax-----------------------------
  // 根据url获得ajax信息
  apiRouter.get('ajax/getPageAjaxsAvg', tokenRequired, ajax.getPageAjaxsAvg);
  // 获得ajax平均性能列表
  apiRouter.get(
    'ajax/getAverageAjaxList',
    tokenRequired,
    ajax.getAverageAjaxList
  );
  // 获得单个api的平均性能数据
  apiRouter.get('ajax/getOneAjaxAvg', tokenRequired, ajax.getOneAjaxAvg);
  // 获得单个api的性能列表数据
  apiRouter.get('ajax/getOneAjaxList', tokenRequired, ajax.getOneAjaxList);
  // 获得单个ajax详情
  apiRouter.get('ajax/getOneAjaxDetail', tokenRequired, ajax.getOneAjaxDetail);

  // -------------------resource资源-----------------------------
  // 根据资源类型获得数据
  apiRouter.get(
    'resource/getResourceForType',
    tokenRequired,
    resource.getResourceForType
  );
  // 获得resource平均性能列表
  apiRouter.get(
    'resource/getAverageResourceList',
    tokenRequired,
    resource.getAverageResourceList
  );
  // 获得单个resource的平均性能数据
  apiRouter.get(
    'resource/getOneResourceAvg',
    tokenRequired,
    resource.getOneResourceAvg
  );
  // 获得单个resource的性能列表数据
  apiRouter.get(
    'resource/getOneResourceList',
    tokenRequired,
    resource.getOneResourceList
  );
  // 获得单个resource的性能详细信息
  apiRouter.get(
    'resource/getOneResourceDetail',
    tokenRequired,
    resource.getOneResourceDetail
  );

  // -------------------resource资源-----------------------------
  // 获得错误分类信息
  apiRouter.get(
    'error/getAverageErrorList',
    tokenRequired,
    error.getAverageErrorList
  );
  // 获得单个错误详情列表
  apiRouter.get('error/getOneErrorList', tokenRequired, error.getOneErrorList);
  // 单个错误详情
  apiRouter.get('error/getErrorDetail', tokenRequired, error.getErrorDetail);
};
