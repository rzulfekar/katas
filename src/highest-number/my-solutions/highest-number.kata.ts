export function getHighestNumber(numbers: number[]): number {
  let max = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    max = Math.max(numbers[i], max)
  }
  return max
}
