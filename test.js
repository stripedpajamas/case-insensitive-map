const test = require('ava')
const CIM = require('.')

let map

test.beforeEach((t) => {
  map = new CIM()
})

test('throws if key is not a string', (t) => {
  t.throws(() => {
    map.set([1, 2, 3], 'hello')
  })
})

test('is case insensitive', (t) => {
  map.set('hello', 'world')
  
  t.is(map.get('Hello'), 'world')
})

test('normal map stuff works', (t) => {
  map.set('hello', 'world')
  map.set('goodbye', 'moon')

  t.is(map.size, 2)

  map.clear()

  t.is(map.size, 0)

  map.set('hello', 'pete')
  t.truthy(map.has('hElLo'))

  map.delete('HellO')

  t.is(map.size, 0)

  map.set('hello', 'world')
  map.set('goodbye', 'moon')

  let keys = []
  let vals = []
  for (let [key, val] of map.entries()) {
    keys.push(key)
    vals.push(val)
  }
  t.deepEqual(keys, ['HELLO', 'GOODBYE'])
  t.deepEqual(vals, ['world', 'moon'])

  keys = []
  vals = []
  map.forEach((val, key) => {
    keys.push(key)
    vals.push(val)
  })
  t.deepEqual(keys, ['HELLO', 'GOODBYE'])
  t.deepEqual(vals, ['world', 'moon'])

  keys = []
  for (let key of map.keys()) {
    keys.push(key)
  }
  t.deepEqual(keys, ['HELLO', 'GOODBYE'])

  vals = []
  for (let val of map.values()) {
    vals.push(val)
  }
  t.deepEqual(vals, ['world', 'moon'])
})
