const config = require('../../../../webpack.config.cjs.json')

// necessary to stop webpack undoing the module.exports[prop] trick in the source code
config.output.library = { type: 'commonjs2' };

module.exports = config;
