export function calculateTotal(amounts) {
  let total = 0
  amounts.forEach(amount => {
    total += amount
  })

  return total
}
