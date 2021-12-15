const config = require('../../../../webpack.config.cjs.json')

config.entry = './src/index.mjs';
// necessary to stop webpack undoing the module.exports[prop] trick in the source code
config.output.library = {
	name: 'module.exports',
	type: 'assign-properties',
};

module.exports = config;
