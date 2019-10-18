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

  return config;
};
