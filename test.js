const test = require('ava')
const CIM = require('.')

test.beforeEach((t) => {
  t.context.map = new CIM()
})

test('throws if key is not a string', (t) => {
  const { map } = t.context
  t.throws(() => {
    map.set([1, 2, 3], 'hello')
  })
})

test('is case insensitive', (t) => {
  const { map } = t.context
  map.set('hello', 'world')
  
  t.is(map.get('Hello'), 'world')
})

test('construct with iterable', (t) => {
  const data = [['a', 'apple'], ['b', 'banana'], ['C', 'cherry']]
  const map = new CIM(data)

  t.is(map.get('a'), 'apple')
  t.is(map.get('B'), 'banana')
  t.is(map.get('c'), 'cherry')
})

test('construct with invalid iterable', (t) => {
  const data = [['a', 'apple'], [613, 'num'], [{}, 'obj']]
  t.throws(() => new CIM(data))
})

test('normal map stuff works', (t) => {
  const { map } = t.context
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
