import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const argv = (__webpack_require__(1).argv);
const assert = __webpack_require__(2);

const sum = __webpack_require__(3);

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

module.exports.test = function test() {
	console.log([
		'The sum of',
		args.a,
		'and',
		args.b,
		'is',
		sum(args.a, args.b)
	].join(' '));
};


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("process");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("assert");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = function sum(a, b) { return a + b }


/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module used 'module' so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__(0);
/******/ var __webpack_exports__test = __webpack_exports__.test;
/******/ export { __webpack_exports__test as test };
/******/ 
