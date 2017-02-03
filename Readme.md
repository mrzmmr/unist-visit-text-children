# unist-visit-text-children

> Unist plugin to return all text nodes that are direct children of a parent.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Install

```
npm i -S unist-visit-text-children
```

## Usage

```
const visitTextChildren = require('unist-visit-text-children')
const remark = require('remark')

const string = 'Some _emphasis_, **importance**, and `code`.'

const callback = (child, index, parent) => {
  console.log(child.value)
}

remark().use(visitTextChildren(callback)).process(string)
```

Yields:

```
Some
,
, and
.
```

## API

### `visitTextChildren(callback)`

Calls callback for every text node directly of parent.

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Dependencies

None

## Dev Dependencies

- [codecov](https://github.com/codecov/codecov-node): Uploading report to Codecov: https://codecov.io
- [nyc](https://github.com/istanbuljs/nyc): the Istanbul command line interface
- [remark](https://github.com/wooorm/remark/tree/master/packages): Markdown processor powered by plugins
- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers

## Contribute

PRs accepted and greatly appreciated.

## License

MIT © mrzmmr
