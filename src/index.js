import isFunction from 'lodash.isfunction'
import { keys, map, curry, zipObj, nth } from 'ramda'

const withProps = (props, data) => {
  const prop = name => (isFunction(props[name]) ? props[name](data) : map(() => props[name], data))
  const propNames = keys(props)

  const results = zipObj(propNames, map(prop, propNames))
  return data.map((d, i) => ({ ...d, ...map(nth(i), results) }))
}

export default curry(withProps)
