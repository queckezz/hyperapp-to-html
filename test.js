
const { h } = require('hyperapp')
const serialize = require('./')
const tsml = require('tsml')
const test = require('ava')

test('empty tags', (t) => {
  const actual = h('h1', {})
  const expected = '<h1></h1>'
  t.is(serialize(actual), expected)
})

test('attributes', (t) => {
  const actual = h('h1', {
    id: 'header',
    class: 'big'
  })

  const expected = '<h1 id="header" class="big"></h1>'
  t.is(serialize(actual), expected)
})

test('escape attributes', (t) => {
  const actual = h('h1', { id: '< & > " \'' })
  const expected = '<h1 id="&lt; &amp; &gt; &quot; &#39;"></h1>'
  t.is(serialize(actual), expected)
})

test('children', (t) => {
  const actual = h('div', null,
    h('p', null),
    h('p', null)
  )

  const expected = tsml`
    <div>
      <p></p>
      <p></p>
    </div>
  `

  t.is(serialize(actual), expected)
})

test('children as text node', (t) => {
  const actual = h('p', null, 'text')
  const expected = '<p>text</p>'
  t.is(serialize(actual), expected)
})
