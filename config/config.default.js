const address = require('address');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = () => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  config.name = 'falconTracker性能监控平台';

  config.description = 'falconTracker性能监控平台';

  config.keys = 'falconTracker_platform_keys';

  config.debug = true;

  config.session_secret = 'falconTracker_platform_secret';

  // 执行pvuvip定时任务的时间间隔 每2分钟定时执行一次 (可更改)
  config.pvuvip_task_minute_time = '0 */2 * * * *';

  // 执行pvuvip定时任务的时间间隔 每天定时执行一次
  config.pvuvip_task_day_time = '0 0 0 */1 * *';

  // 线上环境此处替换为项目根域名 例如:blog.seosiwei.com (这里不需要填写http|https和斜杠等字符)
  // 用于安全校验和回调域名根路径 开发路径域名
  config.host = '127.0.0.1';
  config.port = 7001;

  // top数据分析提取前N条配置
  config.top_alalysis_size = {
    web: 10,
  };

  config.origin = `http://${config.host}:${config.port}`;

  // 集群配置（一般默认即可）
  config.cluster = {
    listen: {
      port: config.port,
      hostname: config.host,
      ip: address.ip(),
    },
  };

  config.security = {
    domainWhiteList: [ 'http://127.0.0.1:18090' ],
    csrf: {
      enable: false,
    },
  };

  // 用户密码加盐随机值
  config.user_pwd_salt_addition = 'ZANEHELLOBEAUTIFUL';

  // 用户登录态持续时间 1 天
  config.user_login_timeout = 86400;

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0,
    },
  };

  config.mongoose = {
    clients: {
      db3: {
        // 单机部署
        url: 'mongodb://127.0.0.1:27017/performance',
        // 副本集 读写分离
        // url: 'mongodb://127.0.0.1:28100,127.0.0.1:28101,127.0.0.1:28102/performance?replicaSet=rs1',
        // 集群分片
        // url: 'mongodb://127.0.0.1:30000/performance',
      },
    },
  };

  // 分页条数
  config.pageSize = 50;

  // ejs模板
  config.view = {
    defaultExtension: '.html',
    mapping: {
      '.html': 'ejs',
    },
  };
  config.ejs = {
    layout: 'layout.html',
  };

  return config
};
