[![Build Status](https://travis-ci.org/siwilizhao/siwi-uniquestring.svg?branch=master)](https://travis-ci.org/siwilizhao/siwi-uniquestring)
[![npm](https://img.shields.io/npm/v/siwi-uniquestring.svg)](https://www.npmjs.com/package/siwi-uniquestring)
[![npm](https://img.shields.io/npm/dt/siwi-uniquestring.svg)](https://www.npmjs.com/package/siwi-uniquestring)

# siwi-uniquestring
生成指定长度的随机字符串

# install

## use npm 

`npm install siwi-uniquestring`

## use yarn

`yarn add siwi-uniquestring`

# Example

```js
const uniqueString = require('siwi-uniquestring')

class Example {
    constructor() {
        this.init()
    }

    async init() {
        const str = await uniqueString.random(32)
        console.log(str)
    }
}

module.exports = new Example()
```

> 89c1fe8cb987d41140f254a296f4ab59