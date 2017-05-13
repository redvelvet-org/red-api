const bunyan = require('bunyan');
const hapiBunyan = require('hapi-bunyan');

const config = {
  register: hapiBunyan,
  options: {
    logger: bunyan.createLogger({ name: 'redapi', level: 'debug' })
  }
};

module.exports = config;
