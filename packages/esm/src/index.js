import process from 'process';
import assert from 'assert';

import sum from './sum.js';

const argv = process.argv;
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

function test() {
	console.log([
		'The sum of',
		args.a,
		'and',
		args.b,
		'is',
		sum(args.a, args.b)
	].join(' '));
}

export { test };
