const usePasswordRequirements = (
  password: string,
  confirmPassowrd: string,
): {
  oneUpperCase: boolean
  oneSpecialCase: boolean
  oneDigit: boolean
  oneLowerCase: boolean
  passwordValid: boolean
  confirmPasswordValid: boolean
} => {
  const confirmPasswordValid = password === confirmPassowrd && password !== ''

  const oneUpperCase = /(?=.*[A-Z])/.test(password)
  const oneSpecialCase = /(?=.*[!@#$&*.])/.test(password)
  const oneDigit = /(?=.*[0-9])/.test(password)
  const oneLowerCase = /(?=.*[a-z])/.test(password)

  const passwordValid = oneUpperCase && oneSpecialCase && oneDigit && oneLowerCase

  return {
    oneUpperCase,
    oneSpecialCase,
    oneDigit,
    oneLowerCase,
    passwordValid,
    confirmPasswordValid,
  }
}

export default usePasswordRequirements
