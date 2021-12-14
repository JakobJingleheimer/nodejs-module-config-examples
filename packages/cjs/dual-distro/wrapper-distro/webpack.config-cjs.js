const config = require('../../../../webpack.config.cjs.json')

config.output.clean = false; // don't wipe the wrapper!

module.exports = config;
