import { EggAppConfig, PowerPartial } from 'egg';

const path = require('path');

export default appInfo => {
  const config: PowerPartial<EggAppConfig> = {};

  config.logrotator = {
    filesRotateBySize: [
      path.join(appInfo.root, 'logs', appInfo.name, 'egg-web.log'),
    ],
    maxFileSize: 2 * 1024 * 1024 * 1024,
  };

  config.logger = {
    consoleLevel: 'DEBUG',
    level: 'DEBUG',
  };

  // PostgresSQL
  config.sequelize = require(__dirname + '/../config/database.json').development;

  config.passportGithub = {
    ...require(__dirname + '/secret.json').passportGithub,
    callbackURL: '/passport/github/callback',
    // proxy: false,
  };

  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    //是否设置默认的Query和Mutation, 默认关闭
    defaultEmptySchema: true,
    // graphQL 路由前的拦截器
    onPreGraphQL: function* (_ctx) { },
    // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
    onPreGraphiQL: function* (_ctx) { },
  };

  config.middleware = ['graphql'];

  return config;
};
