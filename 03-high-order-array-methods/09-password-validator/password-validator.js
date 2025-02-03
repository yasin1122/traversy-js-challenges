function validatePassword(password) {
  const isLengthValid = password.length >= 8

  const hasUpperCase = password.split('').some(char => {
    return char === char.toUpperCase() && char !== char.toLowerCase()
  })

  const hasLowerCase = password.split('').some(char => {
    return char === char.toLowerCase() && char !== char.toUpperCase()
  })

  const hasDigit = password.split('').some(char => {
    return !isNaN(parseInt(char, 10))
  })

  return isLengthValid && hasUpperCase && hasLowerCase && hasDigit
}

// function validatePassword(password) {
//   if (password.length < 8) return false;

//   let hasUpperCase = false;
//   let hasLowerCase = false;
//   let hasDigit = false;

//   for (const char of password) {
//     // Check uppercase
//     if (char === char.toUpperCase() && char !== char.toLowerCase()) {
//       hasUpperCase = true;
//     }
//     // Check lowercase
//     else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
//       hasLowerCase = true;
//     }
//     // Check digit
//     else if (!isNaN(parseInt(char, 10))) {
//       hasDigit = true;
//     }

//     // If all conditions are met, we can exit early
//     if (hasUpperCase && hasLowerCase && hasDigit) {
//       return true;
//     }
//   }

//   return false;
// }

module.exports = validatePassword
