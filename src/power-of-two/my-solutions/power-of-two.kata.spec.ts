import { describe, it, expect } from 'vitest'
import { getPowerOfTwo } from './power-of-two.kata'

describe('powerOfTwo', () => {
  it('should return an empty array if given an empty array', () => {
    const given = [] as number[]
    const actual = getPowerOfTwo(given)
    expect(actual).toEqual([] as number[])
  })

  it('should return the square of all numbers', () => {
    const given = [1, 2, 3] as number[]
    const actual = getPowerOfTwo(given)
    expect(actual).toEqual([1, 4, 9])
  })
})
