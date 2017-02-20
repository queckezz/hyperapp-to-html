
const voidElements = require('html-void-elements')

const htmlEscapes = {
  '&': '&amp',
  '<': '&lt',
  '>': '&gt',
  '"': '&quot',
  "'": '&#39'
}

const encode = (str) => str.replace(/[&'"<>]/g, (a) => htmlEscapes[a] + ';')

const mapValues = (obj, fn) => Object.keys(obj).map((key) => fn(key, obj[key]))

const serializeAttr = (key, value) => {
  return `${key}="${encode(value)}"`
}

const beginElement = (tag, data) => {
  const attrs = mapValues(data, serializeAttr)
  let startTag = `<${tag}`
  return attrs.length > 0
    ? `${startTag} ${attrs.join(' ')}`
    : startTag
}

const endElement = (tag, children) => {
  return voidElements.includes(tag)
    ? '/>'
    : `>${children.map(serialize).join('')}</${tag}>`
}

const serialize = (tree) => {
  if (typeof tree === 'string') return tree
  const { tag, data, children } = tree
  return beginElement(tag, data) + endElement(tag, children)
}

module.exports = serialize
