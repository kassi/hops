# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="11.0.0-rc.27"></a>
# [11.0.0-rc.27](https://github.com/xing/hops/compare/v11.0.0-rc.26...v11.0.0-rc.27) (2018-08-06)




**Note:** Version bump only for package hops-redux

<a name="11.0.0-rc.26"></a>
# [11.0.0-rc.26](https://github.com/xing/hops/compare/v10.4.6...v11.0.0-rc.26) (2018-08-01)


### Bug Fixes

* **redux:** add missing actionCreatorDispatcher files to package ([160e8df](https://github.com/xing/hops/commit/160e8df))
* upgrade dependencies ([b61e8eb](https://github.com/xing/hops/commit/b61e8eb))
* upgrade untool packages ([39fd3e1](https://github.com/xing/hops/commit/39fd3e1))
* use renamed getTemplateData hook in favor of enhanceData ([3577cf7](https://github.com/xing/hops/commit/3577cf7))
* **redux:** fix typo when accessing config ([b564831](https://github.com/xing/hops/commit/b564831))
* **redux:** specify esnext field to transpile code ([3ddd057](https://github.com/xing/hops/commit/3ddd057))


### Chores

* specify engines as >=8.10 in all packages ([1b7a1d2](https://github.com/xing/hops/commit/1b7a1d2))


### Code Refactoring

* **redux:** namespace render options ([17f3e3c](https://github.com/xing/hops/commit/17f3e3c))


### Features

* **postcss:** implement postcss package ([6091ed7](https://github.com/xing/hops/commit/6091ed7))
* **redux:** add action creator dispatcher mixin ([e3beb52](https://github.com/xing/hops/commit/e3beb52))
* **redux:** add config as argument to thunk ([c84cfb0](https://github.com/xing/hops/commit/c84cfb0))
* **redux:** add fetch to thunks ([fa9d8f9](https://github.com/xing/hops/commit/fa9d8f9))
* **redux:** add overridable getReduxMiddlewares hook ([7370d3d](https://github.com/xing/hops/commit/7370d3d))
* **redux:** expose getReduxStore hook ([e847c9e](https://github.com/xing/hops/commit/e847c9e))
* **redux:** implement "shouldPrefetchOnServer" hook/preset option ([b8b2e45](https://github.com/xing/hops/commit/b8b2e45))
* **redux:** remove configureFetch hook ([a222c49](https://github.com/xing/hops/commit/a222c49))
* **redux:** remove fetch from thunks ([4dd5c37](https://github.com/xing/hops/commit/4dd5c37))
* **redux:** use shouldPrefetchOnServer instead of _hopsStatic ([4f7361e](https://github.com/xing/hops/commit/4f7361e))


### BREAKING CHANGES

* **redux:** redux specific options are now namespaced
If you want to pass options to the hops-redux package you need to pass
them to the render function inside a `redux` key:
**Before:**
```javascript
render(<MyApp />, { reducers: {...} });
```
**After:**
```javascript
render(<MyApp />, { redux: { reducers: {...}  } });
```
* Increase minimum required Node.js version from 6 to 8
This commit specifies Node.js 8.10 as minimum required version in all
packages.




<a name="11.0.0-rc.25"></a>
# [11.0.0-rc.25](https://github.com/xing/hops/compare/v10.4.6...v11.0.0-rc.25) (2018-07-31)


### Bug Fixes

* **redux:** add missing actionCreatorDispatcher files to package ([160e8df](https://github.com/xing/hops/commit/160e8df))
* upgrade dependencies ([b61e8eb](https://github.com/xing/hops/commit/b61e8eb))
* upgrade untool packages ([39fd3e1](https://github.com/xing/hops/commit/39fd3e1))
* use renamed getTemplateData hook in favor of enhanceData ([3577cf7](https://github.com/xing/hops/commit/3577cf7))
* **redux:** fix typo when accessing config ([b564831](https://github.com/xing/hops/commit/b564831))
* **redux:** specify esnext field to transpile code ([3ddd057](https://github.com/xing/hops/commit/3ddd057))


### Chores

* specify engines as >=8.10 in all packages ([1b7a1d2](https://github.com/xing/hops/commit/1b7a1d2))


### Code Refactoring

* **redux:** namespace render options ([17f3e3c](https://github.com/xing/hops/commit/17f3e3c))


### Features

* **postcss:** implement postcss package ([6091ed7](https://github.com/xing/hops/commit/6091ed7))
* **redux:** add action creator dispatcher mixin ([e3beb52](https://github.com/xing/hops/commit/e3beb52))
* **redux:** add fetch to thunks ([fa9d8f9](https://github.com/xing/hops/commit/fa9d8f9))
* **redux:** add overridable getReduxMiddlewares hook ([7370d3d](https://github.com/xing/hops/commit/7370d3d))
* **redux:** expose getReduxStore hook ([e847c9e](https://github.com/xing/hops/commit/e847c9e))
* **redux:** implement "shouldPrefetchOnServer" hook/preset option ([b8b2e45](https://github.com/xing/hops/commit/b8b2e45))
* **redux:** remove configureFetch hook ([a222c49](https://github.com/xing/hops/commit/a222c49))
* **redux:** use shouldPrefetchOnServer instead of _hopsStatic ([4f7361e](https://github.com/xing/hops/commit/4f7361e))


### BREAKING CHANGES

* **redux:** redux specific options are now namespaced
If you want to pass options to the hops-redux package you need to pass
them to the render function inside a `redux` key:
**Before:**
```javascript
render(<MyApp />, { reducers: {...} });
```
**After:**
```javascript
render(<MyApp />, { redux: { reducers: {...}  } });
```
* Increase minimum required Node.js version from 6 to 8
This commit specifies Node.js 8.10 as minimum required version in all
packages.




<a name="11.0.0-rc.23"></a>
# [11.0.0-rc.23](https://github.com/xing/hops/compare/v11.0.0-rc.22...v11.0.0-rc.23) (2018-07-26)


### Bug Fixes

* upgrade untool packages ([1bd0829](https://github.com/xing/hops/commit/1bd0829))


### Features

* **redux:** implement "shouldPrefetchOnServer" hook/preset option ([960c8e9](https://github.com/xing/hops/commit/960c8e9))
* **redux:** remove configureFetch hook ([79262c4](https://github.com/xing/hops/commit/79262c4))




<a name="11.0.0-rc.22"></a>
# [11.0.0-rc.22](https://github.com/xing/hops/compare/v11.0.0-rc.21...v11.0.0-rc.22) (2018-07-25)


### Bug Fixes

* upgrade dependencies ([e92e305](https://github.com/xing/hops/commit/e92e305))




<a name="11.0.0-rc.21"></a>
# [11.0.0-rc.21](https://github.com/xing/hops/compare/v11.0.0-rc.20...v11.0.0-rc.21) (2018-07-20)




**Note:** Version bump only for package hops-redux

<a name="11.0.0-rc.20"></a>
# [11.0.0-rc.20](https://github.com/xing/hops/compare/v11.0.0-rc.19...v11.0.0-rc.20) (2018-07-19)


### Features

* **redux:** add fetch to thunks ([3d6a5f2](https://github.com/xing/hops/commit/3d6a5f2))




<a name="11.0.0-rc.19"></a>
# [11.0.0-rc.19](https://github.com/xing/hops/compare/v10.4.6...v11.0.0-rc.19) (2018-07-19)


### Bug Fixes

* **redux:** add missing actionCreatorDispatcher files to package ([b1ebe2d](https://github.com/xing/hops/commit/b1ebe2d))
* **redux:** specify esnext field to transpile code ([58a6b09](https://github.com/xing/hops/commit/58a6b09))
* use renamed getTemplateData hook in favor of enhanceData ([31ecf4f](https://github.com/xing/hops/commit/31ecf4f))


### Chores

* specify engines as >=8.10 in all packages ([bb20aa6](https://github.com/xing/hops/commit/bb20aa6))


### Code Refactoring

* **redux:** namespace render options ([c83d9aa](https://github.com/xing/hops/commit/c83d9aa))


### Features

* **postcss:** implement postcss package ([46ec09e](https://github.com/xing/hops/commit/46ec09e))
* **redux:** add action creator dispatcher mixin ([78a848c](https://github.com/xing/hops/commit/78a848c))
* **redux:** add overridable getReduxMiddlewares hook ([ccaefa7](https://github.com/xing/hops/commit/ccaefa7))
* **redux:** expose getReduxStore hook ([9ada268](https://github.com/xing/hops/commit/9ada268))
* **redux:** use shouldPrefetchOnServer instead of _hopsStatic ([e601483](https://github.com/xing/hops/commit/e601483))


### BREAKING CHANGES

* **redux:** redux specific options are now namespaced
If you want to pass options to the hops-redux package you need to pass
them to the render function inside a `redux` key:
**Before:**
```javascript
render(<MyApp />, { reducers: {...} });
```
**After:**
```javascript
render(<MyApp />, { redux: { reducers: {...}  } });
```
* Increase minimum required Node.js version from 6 to 8
This commit specifies Node.js 8.10 as minimum required version in all
packages.




<a name="11.0.0-rc.17"></a>
# [11.0.0-rc.17](https://github.com/xing/hops/compare/v11.0.0-rc.16...v11.0.0-rc.17) (2018-07-09)




**Note:** Version bump only for package hops-redux

<a name="11.0.0-rc.16"></a>
# [11.0.0-rc.16](https://github.com/xing/hops/compare/v11.0.0-rc.15...v11.0.0-rc.16) (2018-07-09)




**Note:** Version bump only for package hops-redux

<a name="11.0.0-rc.13"></a>
# [11.0.0-rc.13](https://github.com/xing/hops/compare/v11.0.0-rc.12...v11.0.0-rc.13) (2018-07-04)




**Note:** Version bump only for package hops-redux

<a name="11.0.0-rc.12"></a>
# [11.0.0-rc.12](https://github.com/xing/hops/compare/v11.0.0-rc.11...v11.0.0-rc.12) (2018-06-28)


### Code Refactoring

* **redux:** namespace render options ([34653f0](https://github.com/xing/hops/commit/34653f0))


### BREAKING CHANGES

* **redux:** redux specific options are now namespaced
If you want to pass options to the hops-redux package you need to pass
them to the render function inside a `redux` key:
**Before:**
```javascript
render(<MyApp />, { reducers: {...} });
```
**After:**
```javascript
render(<MyApp />, { redux: { reducers: {...}  } });
```




<a name="11.0.0-rc.9"></a>
# [11.0.0-rc.9](https://github.com/xing/hops/compare/v11.0.0-rc.8...v11.0.0-rc.9) (2018-06-27)


### Bug Fixes

* use renamed getTemplateData hook in favor of enhanceData ([79f939b](https://github.com/xing/hops/commit/79f939b))




<a name="11.0.0-rc.7"></a>
# [11.0.0-rc.7](https://github.com/xing/hops/compare/v11.0.0-rc.6...v11.0.0-rc.7) (2018-06-25)


### Bug Fixes

* **redux:** specify esnext field to transpile code ([888dc09](https://github.com/xing/hops/commit/888dc09))




<a name="11.0.0-rc.6"></a>
# [11.0.0-rc.6](https://github.com/xing/hops/compare/v11.0.0-rc.5...v11.0.0-rc.6) (2018-06-25)


### Bug Fixes

* **redux:** add missing actionCreatorDispatcher files to package ([84170d8](https://github.com/xing/hops/commit/84170d8))




<a name="11.0.0-rc.5"></a>
# [11.0.0-rc.5](https://github.com/xing/hops/compare/v11.0.0-rc.4...v11.0.0-rc.5) (2018-06-25)


### Features

* **postcss:** implement postcss package ([7e79abd](https://github.com/xing/hops/commit/7e79abd))
* **redux:** add action creator dispatcher mixin ([2f0e24d](https://github.com/xing/hops/commit/2f0e24d))
* **redux:** use shouldPrefetchOnServer instead of _hopsStatic ([5ca5843](https://github.com/xing/hops/commit/5ca5843))




<a name="11.0.0-rc.4"></a>
# [11.0.0-rc.4](https://github.com/xing/hops/compare/v11.0.0-rc.3...v11.0.0-rc.4) (2018-06-05)


### Features

* **redux:** expose getReduxStore hook ([d63e2d4](https://github.com/xing/hops/commit/d63e2d4))




<a name="11.0.0-rc.3"></a>
# [11.0.0-rc.3](https://github.com/xing/hops/compare/v10.4.3...v11.0.0-rc.3) (2018-05-25)


### Chores

* specify engines as >=8.10 in all packages ([335fd84](https://github.com/xing/hops/commit/335fd84))
* specify engines as >=8.10 in all packages ([9228cb1](https://github.com/xing/hops/commit/9228cb1))


### BREAKING CHANGES

* Increase minimum required Node.js version from 6 to 8
This commit specifies Node.js 8.10 as minimum required version in all
packages.
* Increase minimum required Node.js version from 6 to 8
This commit specifies Node.js 8.10 as minimum required version in all
packages.




<a name="11.0.0-rc.0"></a>
# [11.0.0-rc.0](https://github.com/xing/hops/compare/v10.4.3...v11.0.0-rc.0) (2018-05-22)


### Chores

* specify engines as >=8.10 in all packages ([bc24dca](https://github.com/xing/hops/commit/bc24dca))
* specify engines as >=8.10 in all packages ([9228cb1](https://github.com/xing/hops/commit/9228cb1))


### BREAKING CHANGES

* Increase minimum required Node.js version from 6 to 8
This commit specifies Node.js 8.10 as minimum required version in all
packages.
* Increase minimum required Node.js version from 6 to 8
This commit specifies Node.js 8.10 as minimum required version in all
packages.




<a name="10.4.3"></a>
## [10.4.3](https://github.com/xing/hops/compare/v10.4.2...v10.4.3) (2018-04-24)


### Bug Fixes

* update dependency redux to v4 ([0b6c6d4](https://github.com/xing/hops/commit/0b6c6d4))




<a name="10.4.0"></a>
# [10.4.0](https://github.com/xing/hops/compare/v10.2.0-rc.5...v10.4.0) (2018-04-17)




**Note:** Version bump only for package hops-redux

<a name="10.3.0"></a>
# [10.3.0](https://github.com/xing/hops/compare/v10.3.0-rc.3...v10.3.0) (2018-04-09)




**Note:** Version bump only for package hops-redux

<a name="10.2.0"></a>
# [10.2.0](https://github.com/xing/hops/compare/v10.2.0-rc.5...v10.2.0) (2018-03-26)




**Note:** Version bump only for package hops-redux

<a name="10.0.2"></a>
## [10.0.2](https://github.com/xing/hops/compare/v10.0.1...v10.0.2) (2018-02-15)




**Note:** Version bump only for package hops-redux

<a name="10.0.1"></a>
## [10.0.1](https://github.com/xing/hops/compare/v10.0.0...v10.0.1) (2018-02-09)




**Note:** Version bump only for package hops-redux

<a name="10.0.0"></a>
# [10.0.0](https://github.com/xing/hops/compare/v10.0.0-rc.4...v10.0.0) (2018-02-07)




**Note:** Version bump only for package hops-redux

<a name="9.8.0"></a>
# [9.8.0](https://github.com/xing/hops/compare/v9.7.0...v9.8.0) (2018-01-25)




**Note:** Version bump only for package hops-redux

<a name="9.5.0"></a>
# [9.5.0](https://github.com/xing/hops/compare/v9.4.3...v9.5.0) (2018-01-09)




**Note:** Version bump only for package hops-redux

<a name="9.3.0"></a>
# [9.3.0](https://github.com/xing/hops/compare/v9.2.0...v9.3.0) (2017-12-14)




**Note:** Version bump only for package hops-redux

<a name="9.2.0"></a>
# [9.2.0](https://github.com/xing/hops/compare/v9.1.1...v9.2.0) (2017-12-11)




**Note:** Version bump only for package hops-redux

<a name="9.1.1"></a>
## [9.1.1](https://github.com/xing/hops/compare/v9.1.0...v9.1.1) (2017-12-05)




**Note:** Version bump only for package hops-redux

<a name="9.1.0"></a>
# [9.1.0](https://github.com/xing/hops/compare/v9.0.1...v9.1.0) (2017-11-29)


### Features

* **hops-redux:** allow to specify middlewares as option ([c7b8fcd](https://github.com/xing/hops/commit/c7b8fcd))




<a name="9.0.0"></a>
# [9.0.0](https://github.com/xing/hops/compare/v8.0.0...v9.0.0) (2017-11-27)


### Bug Fixes

* **redux:** make getTemplateData order-agnostic ([f60b169](https://github.com/xing/hops/commit/f60b169))


### Features

* **redux:** implement constructor based mixins ([19ef2fc](https://github.com/xing/hops/commit/19ef2fc))


### BREAKING CHANGES

* **redux:** export.contextDefinition is now a constructor function (used to be an object literal)




<a name="8.0.0"></a>
# [8.0.0](https://github.com/xing/hops/compare/v7.4.1...v8.0.0) (2017-11-22)


### Code Refactoring

* **redux:** make main export a context mixin ([f5edae6](https://github.com/xing/hops/commit/f5edae6))
* **redux:** rename mixin definition export ([321e733](https://github.com/xing/hops/commit/321e733))


### Features

* **redux:** implement simplified mixin support ([dfed624](https://github.com/xing/hops/commit/dfed624))
* **redux:** introduce mixin support ([c0da538](https://github.com/xing/hops/commit/c0da538))


### BREAKING CHANGES

* **redux:** export naming changed
* **redux:** exports changed
* **redux:** main export changed
* **redux:** Context.extends is removed, Context.mixin is added




<a name="7.4.0"></a>
# [7.4.0](https://github.com/xing/hops/compare/v7.3.5...v7.4.0) (2017-11-01)


### Features

* **redux:** add support for React@16 ([b735697](https://github.com/xing/hops/commit/b735697))




<a name="7.3.5"></a>
## [7.3.5](https://github.com/xing/hops/compare/v7.3.4...v7.3.5) (2017-10-27)


### Bug Fixes

* **hops-redux:** make options.reducers optional again ([06dae00](https://github.com/xing/hops/commit/06dae00))




<a name="7.3.2"></a>
## [7.3.2](https://github.com/xing/hops/compare/v7.3.1...v7.3.2) (2017-10-26)




**Note:** Version bump only for package hops-redux

<a name="7.3.0"></a>
# [7.3.0](https://github.com/xing/hops/compare/v7.2.0...v7.3.0) (2017-10-26)


### Features

* **redux:** add support for hops-graphql ([807966e](https://github.com/xing/hops/commit/807966e))
* **redux:** simplify custom store setup ([f11cac8](https://github.com/xing/hops/commit/f11cac8))




<a name="7.2.0"></a>
# [7.2.0](https://github.com/xing/hops/compare/v7.1.0...v7.2.0) (2017-10-18)




**Note:** Version bump only for package hops-redux

<a name="7.1.0"></a>
# [7.1.0](https://github.com/xing/hops/compare/v7.0.0...v7.1.0) (2017-10-16)




**Note:** Version bump only for package hops-redux

<a name="7.0.0"></a>
# [7.0.0](https://github.com/xing/hops/compare/v6.2.8...v7.0.0) (2017-10-13)


### Features

* **redux:** split hops packages, introduce changelog
