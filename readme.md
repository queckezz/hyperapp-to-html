**This project has been deprecated in favor of [hyperapp-render](https://github.com/frenzzy/hyperapp-render) since it built for the latest version of Hyperapp and support the same functionality and even more.**

# hyperapp-to-html [![Build status][travis-image]][travis-url] [![NPM version][version-image]][version-url] [![Dependency Status][david-image]][david-url] [![License][license-image]][license-url] [![Js Standard Style][standard-image]][standard-url]

> See [hyperapp#14](https://github.com/hyperapp/hyperapp/issues/14)

Serialize hyperapp virtual nodes to html strings

## Installation

```sh
npm install --save hyperapp-to-html
```

Or even better

```sh
yarn add hyperapp-to-html
```

## Import and Usage Example

```js
const toString = require('hyperapp-to-html')
const { h } = require('hyperapp')

console.log(toString(
  h('div', { id: 'wrapper' },
    h('h1', null, 'Hello world!')
    h('p', { style: 'color: red;' }, 'This is a description')
  )
))
```

## Author

**hyperapp-to-html** © [Fabian Eichenberger](https://github.com/queckezz), Released under the [MIT](./license) License.<br>
Authored and maintained by Fabian Eichenberger with help from contributors ([list](https://github.com/queckezz/hyperapp-to-html/contributors)).

> GitHub [@queckezz](https://github.com/queckezz) · Twitter [@queckezz](https://twitter.com/queckezz)

[travis-image]: https://img.shields.io/travis/queckezz/hyperapp-to-html.svg?style=flat-square
[travis-url]: https://travis-ci.org/queckezz/hyperapp-to-html

[version-image]: https://img.shields.io/npm/v/hyperapp-to-html.svg?style=flat-square
[version-url]: https://npmjs.org/package/hyperapp-to-html

[david-image]: http://img.shields.io/david/queckezz/hyperapp-to-html.svg?style=flat-square
[david-url]: https://david-dm.org/queckezz/hyperapp-to-html

[standard-image]: https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[license-image]: http://img.shields.io/npm/l/hyperapp-to-html.svg?style=flat-square
[license-url]: ./license
