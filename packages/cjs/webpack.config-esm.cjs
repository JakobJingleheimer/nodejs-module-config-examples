const config = require('../../webpack.config.esm.json');

config.output.filename = '[name].mjs';

module.exports = config;
