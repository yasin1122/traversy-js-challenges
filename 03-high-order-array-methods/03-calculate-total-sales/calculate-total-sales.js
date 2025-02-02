function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce((sum, product) => {
    return sum + product.price * product.quantity
  }, 0)

  const taxAmount = (taxRate * totalSales) / 100
  const totalSalesWithTax = totalSales + taxAmount

  return parseFloat(totalSalesWithTax.toFixed(2))
}

module.exports = calculateTotalSalesWithTax
