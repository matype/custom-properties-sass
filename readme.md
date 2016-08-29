# custom-properties-sass [![Build Status](https://travis-ci.org/morishitter/custom-properties-sass.svg)](https://travis-ci.org/morishitter/custom-properties-sass)

Transpile Custom Properties to Sass variables

## Installation

```shell
$ npm install custom-properties-sass
```

## Example

Input:

```css
:root {
  --red: #ff4136;
  --green: #2ecc40;
  --blue: #0074d9;
}
```

Output:

```scss
$red: #ff4136;
$green: #2ecc40;
$blue: #0074d9;

```

## Usage

```js
// dependencies
var fs = require("fs")
var postcss = require("postcss")
var customPropertieSass = require("custom-propertie-sass")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

// process css
var output = postcss()
  .use(customPropertieSass())
  .process(css)
  .css
```

## License

The MIT License (MIT)

Copyright (c) 2016 Masaaki Morishita
