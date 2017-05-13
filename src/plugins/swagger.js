const pack = require('../../package.json');
const swagger = require('hapi-swagger');

const options = {
  info: {
    'title': 'Red API Docs',
    'version': pack.version
  }
};

module.exports = {
  register: swagger,
  options
};
