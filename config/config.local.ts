import { EggAppConfig, PowerPartial } from 'egg';
import DefaultConfig from './config.default';

const path = require('path');

export default appInfo => {
  const config: PowerPartial<EggAppConfig> = DefaultConfig;

  config.logrotator = {
    filesRotateBySize: [
      path.join(appInfo.root, 'logs', appInfo.name, 'local', 'egg-web.log'),
    ],
    maxFileSize: 2 * 1024 * 1024 * 1024,
  };

  config.logger = {
    consoleLevel: 'DEBUG',
    level: 'DEBUG',
  };

  // PostgresSQL
  config.sequelize = require(__dirname + '/database.json').development;

  return config;
};
