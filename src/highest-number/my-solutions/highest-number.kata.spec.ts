import { expect, describe, it } from 'vitest'
import { getHighestNumber } from './highest-number.kata'

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [42]
    const actual = getHighestNumber(given)
    expect(actual).toBe(42)
  })

  it('should get the highest number given an array of several numbers', () => {
    const given = [1, 3, 2]
    const actual = getHighestNumber(given)
    expect(actual).toBe(3)
  })

  it('should return error on an empty array', () => {
    const given = [] as number[]
    expect(() => getHighestNumber(given)).toThrow('array is empty')
  })
})
