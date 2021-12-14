const argv = require('process').argv;
const assert = require('assert');

const sum = require('./sum.js');

const args = {
	a: 4,
	b: 8
};

assert.equal(typeof sum, 'function');
assert.equal(sum(args.a, args.b), 12);

for (
	let i = 2,
	count = argv.length;
	i < count;
	i++
) {
	const match = argv[i].match(/--(.+)=(.+)/);
	const key = match[1];
	const val = +match[2];

	args[key] = val;
}

const e = {
	test() {
		console.log([
			'The sum of',
			args.a,
			'and',
			args.b,
			'is',
			sum(args.a, args.b)
		].join(' '));
	},
}

// assigning directly works fine, but assigning by reference breaks detection
module.exports = e;
