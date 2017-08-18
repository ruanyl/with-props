import test from 'ava'
import withProps from '../src'

test('should be true', t => {
  const rawData = [
    { open: 2, close: 2, low: 1, high: 3 },
    { open: 2, close: 3, low: 2, high: 5 },
    { open: 5, close: 2, low: 2, high: 7 },
  ]
  const props = {
    average: data => data.map(d => (d.open + d.close + d.low + d.high) / 4),
    fixed: 'fixed',
  }
  const results = withProps(props, rawData)
  const expectResults = [
    { open: 2, close: 2, low: 1, high: 3, average: 2, fixed: 'fixed' },
    { open: 2, close: 3, low: 2, high: 5, average: 3, fixed: 'fixed' },
    { open: 5, close: 2, low: 2, high: 7, average: 4, fixed: 'fixed' },
  ]
  t.plan(1)
  t.deepEqual(results, expectResults)
})
