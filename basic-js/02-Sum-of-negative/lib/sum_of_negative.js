sumOfNegative = (numbers) => {
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
  let result = 0
  numbers.forEach((number) => {
    if (number < 0){
      result += number
    }
  })
  return result
}

console.log(sumOfNegative([-1, 4, -2, 9, 18]))
console.log(sumOfNegative([15, 16, 17, 1000]))
