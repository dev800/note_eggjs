import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  graphql: {
    enable: true,
    package: 'egg-graphql',
  },

  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },

  passport: {
    enable: true,
    package: 'egg-passport',
  },

  passportGithub: {
    enable: true,
    package: 'egg-passport-github',
  },

  passportLocal: {
    enable: true,
    package: 'egg-passport-local',
  },
};

export default plugin;
