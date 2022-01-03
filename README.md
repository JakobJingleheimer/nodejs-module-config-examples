# About

This repository contains example configurations for CJS ↔︎ ES modules. All CJS configurations should work in any version of Node.js (I confirmed in 12.22.0 and 17.2.0); all ESM configurations should work in Node.js 12.22.0+.

# Proof

Packages have either 1 or both test files:

* `test.cjs` (CommonJS)
* `test.mjs` (ES Module)

Specific file extensions for test files are often not necessary, but are used for consistency and clarity.

To run the tests:

1. cd into `./packages/THE_PACKAGE_NAME`
1. install dependencies (ex `npm i`)
1. run `node ./test.cjs` and/or `node ./test.mjs`

If you make changes to the source code, remember to re-build the distribution (ex `npm run build`). I happened to use webpack merely to demonstrate that this also works with it, but using webpack is not necessary (this could be done manually, or with another bundler/build-tool).

Tests accept 2 command-line arguments (both of which have default values), which can be passed at the end, ex `node ./test.mjs --a=42 --b=-3`

Each test uses the `package.json` in its directory to resolve imports or requires as appropriate. You can confirm this by breaking the package.json config (ex deleting `main` and `exports`).
