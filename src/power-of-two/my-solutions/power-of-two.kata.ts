export function getPowerOfTwo(numbers: number[]): number[] {
  if (!numbers.length) return [] as number[]

  const squares = new Array<number>(numbers.length)

  for (let i = 0; i < squares.length; i++) {
    squares[i] = Math.pow(numbers[i], 2)
  }

  console.log('squares', squares)
  return squares as number[]
}
