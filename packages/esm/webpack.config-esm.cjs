const config = require('../../webpack.config.esm.json');

config.output.filename = '[name].js';

module.exports = config;
