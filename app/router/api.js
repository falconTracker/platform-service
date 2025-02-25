'use strict';
const version = require('../../package.json').version;

module.exports = (app) => {
  const apiRouter = app.router.namespace(`/api/v${version}/`);
  const { controller, middleware } = app;
  const { user, remove, system, errors } = controller.api;

  // 校验用户是否登录中间件
  const tokenRequired = middleware.tokenRequired();

  // -----------------用户相关------------------
  // 用户登录
  apiRouter.post('user/login', user.login);
  // 用户注册
  apiRouter.post('user/register', user.register);
  // 退出登录
  apiRouter.get('user/logout', tokenRequired, user.logout);
  // 获得用户列表
  apiRouter.post('user/getUserList', tokenRequired, user.getUserList);
  // 冻结解冻用户
  apiRouter.post('user/setIsUse', tokenRequired, user.setIsUse);
  // 删除用户
  apiRouter.post('user/delete', tokenRequired, user.delete);

  // ----------------系统配置相关---------------
  // 新增系统
  apiRouter.post('system/add', tokenRequired, system.addNewSystem);
  // 修改系统
  apiRouter.post('system/update', tokenRequired, system.updateSystem);
  // 根据用户ID获得系统信息
  apiRouter.get(
    'system/getSysForUserId',
    tokenRequired,
    system.getSysForUserId
  );
  // 根据系统ID获得单个系统信息
  apiRouter.get('system/getSystemForId', tokenRequired, system.getSystemForId);
  // 获得系统列表
  apiRouter.get('system/web/list', tokenRequired, system.getWebSystemList);
  // 删除系统中某个用户
  apiRouter.post(
    'system/deleteUser',
    tokenRequired,
    system.deleteWebSystemUser
  );
  // 新增系统中某个用户
  apiRouter.post('system/addUser', tokenRequired, system.addWebSystemUser);
  // 删除某个系统
  apiRouter.post('system/deleteSystem', tokenRequired, system.deleteSystem);

  // -------------------清空数据-----------------------------
  // 清空db1 1日之前无用数据
  apiRouter.post(
    'remove/deleteDb1WebData',
    tokenRequired,
    remove.deleteDb1WebData
  );
  // 清空db2 number日之前所有性能数据
  apiRouter.post(
    'remove/deleteDb2WebData',
    tokenRequired,
    remove.deleteDb2WebData
  );

  // -------------------系统错误信息-----------------------------
  apiRouter.get(
    'errors/getSysDbErrorList',
    tokenRequired,
    errors.getSysDbErrorList
  );
};
