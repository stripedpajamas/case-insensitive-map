# case insensitive map

a map that doesn't care about the case of its keys. your keys have to be strings (if they aren't you should probably be using a regular map).

## install
```
$ npm install case-insensitive-map
```

## use
```javascript
const CIM = require('case-insensitive-map')

const map = new CIM()

map.set('hello', 'world')
map.get('HELLo') // world
```

all the rest of the [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) api works as well (this is just a wrapper)

## license
MIT
