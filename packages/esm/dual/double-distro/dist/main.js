import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "test": () => (/* binding */ test)
});

;// CONCATENATED MODULE: external "process"
const external_process_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("process");
;// CONCATENATED MODULE: external "assert"
const external_assert_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("assert");
;// CONCATENATED MODULE: ../../src/sum.js
function sum(a, b) { return a + b }

;// CONCATENATED MODULE: ../../src/index.js





const argv = external_process_namespaceObject.argv;
const args = {
	a: 4,
	b: 8
};

external_assert_namespaceObject.equal(typeof sum, 'function');
external_assert_namespaceObject.equal(sum(args.a, args.b), 12);

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



var __webpack_exports__test = __webpack_exports__.test;
export { __webpack_exports__test as test };
