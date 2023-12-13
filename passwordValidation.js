// Write your student id, firstname, and lastname in a single line comment here
// 65130500094 Chanapol Puntuvadee
function isPasswordValid(password) {
  // Check if the password is undefined or null
  if (password === undefined || password === null) {
    return false
  }
  if (password.length < 8) {
    return false
  }
  const upper = /[A-Z]/.test(password)
  const lower = /[a-z]/.test(password)
  const number = /\d/.test(password)
  const special = /[@#$%^&*!]/.test(password)
  return upper && lower && number && special
}
module.exports = isPasswordValid
