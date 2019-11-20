import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.ejs': 'ejs',
      '.nj': 'nunjucks',
    },
  };

  config.security = {
    // domainWhiteList: ['.helloworld.com'],  // 安全白名单，以 . 开头
    csrf: {
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf,
      useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    },
  };

  // https://eggjs.org/zh-cn/core/cookie-and-session.html
  config.session = {
    key: '_ss',
    // 91天
    maxAge: 24 * 3600 * 1000 * 91,
    httpOnly: true,
    encrypt: true,
    renew: true,
  };

  // https://eggjs.org/zh-cn/core/i18n.html
  config.i18n = {
    defaultLocale: 'zh-CN',
    queryField: 'locale',
    cookieField: 'locale',
    // Cookie 默认一年后过期， 如果设置为 Number，则单位为 ms
    cookieMaxAge: '1y',
  };

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571370574122_5607';

  // add your egg config in here
  config.middleware = [];

  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    // 是否设置默认的Query和Mutation, 默认关闭
    defaultEmptySchema: true,
    // graphQL 路由前的拦截器
    *onPreGraphQL (_ctx) { },
    // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
    *onPreGraphiQL (_ctx) { },
  };

  config.middleware = [ 'graphql' ];

  config.passportGithub = {
    ...require(__dirname + '/secret.json').passportGithub,
    callbackURL: '/passport/github/callback',
    // proxy: false,
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
