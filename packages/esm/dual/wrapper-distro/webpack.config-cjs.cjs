const config = require('../../webpack.config-cjs.cjs')

config.output.clean = false; // don't wipe the wrapper!

module.exports = config;
