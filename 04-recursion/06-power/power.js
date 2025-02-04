// function power(base, exp) {
//   if (exp === 0) return 1

//   return power(base, exp - 1) * base
// }

const power = (base, exp) => (exp === 0 ? 1 : power(base, exp - 1) * base)

module.exports = power
