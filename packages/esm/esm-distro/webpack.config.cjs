const config = require('../../../webpack.config.esm.json');

config.entry = './src/index.mjs';
config.output.filename = '[name].js'; // put extension back to .js

module.exports = config;
