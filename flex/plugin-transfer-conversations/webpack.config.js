const DotEnvWebpack = require('dotenv-webpack');
module.exports = (config, { isProd, isDev, isTest }) => {
  config.plugins.push(new DotEnvWebpack({
    path: `.env`
  }));
  return config;
}