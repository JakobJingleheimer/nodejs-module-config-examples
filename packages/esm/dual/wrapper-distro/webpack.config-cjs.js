const config = require('../../../../webpack.config.cjs.json')

config.entry = './src/index.mjs';
config.output.clean = false; // don't wipe the wrapper!
config.output.filename = '[name].js'; // put extension back to .js

module.exports = config;
