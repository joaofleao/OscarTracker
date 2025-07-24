import TextField, { TextFieldProps } from '@components/FormFields/TextField'

export type EmailFieldProps = TextFieldProps

const defaultProps: EmailFieldProps = {
  placeholder: 'oscar@email.com',
  label: 'Email',
}

const emailValidation = (value: string): boolean => {
  const emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)

  return emailValid
}

const EmailField = (props: EmailFieldProps): JSX.Element => {
  const { value, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const formattedEmail = value.replace(/[^a-zA-Z0-9@.]/g, '')
  const errorText = 'You must provide a valid email'

  return (
    <TextField
      autoComplete="email"
      errorText={errorText}
      valid={emailValidation(formattedEmail)}
      value={formattedEmail}
      {...rest}
    />
  )
}

export default EmailField
export { emailValidation }
