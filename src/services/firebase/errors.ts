interface Error {
  code: string
  message: string
  name: string
}

const getError = (response: Error) => {
  if (response.code === 'auth/invalid-email')
    return {
      type: 'danger',
      title: 'Invalid Email',
      description: 'It seems like you have entered an invalid email, please try again',
    }
  if (response.code === 'auth/wrong-password')
    return {
      type: 'danger',
      title: 'Invalid Password',
      description: 'It seems like you have entered the wrong password, please try again',
    }
  if (response.code === 'auth/user-not-found')
    return {
      type: 'danger',
      title: 'Invalid User',
      description: 'It seems like there are no users register in this email, please try again',
    }
  else
    return {
      type: 'danger',
      title: response.name,
      description: response.code,
    }
}

export { getError }
