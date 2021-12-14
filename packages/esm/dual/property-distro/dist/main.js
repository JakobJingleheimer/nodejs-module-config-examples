'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var process = require('process');
var assert = require('assert');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var process__default = /*#__PURE__*/_interopDefaultLegacy(process);
var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);

function sum(a, b) { return a + b }

const argv = process__default["default"].argv;
const args = {
	a: 4,
	b: 8
};

assert__default["default"].equal(typeof sum, 'function');
assert__default["default"].equal(sum(args.a, args.b), 12);

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

exports.test = test;
