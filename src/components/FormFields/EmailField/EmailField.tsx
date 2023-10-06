import TextField, { TextFieldProps } from '@components/FormFields/TextField'

export type EmailFieldProps = TextFieldProps

const defaultProps: EmailFieldProps = {
  placeholder: 'oscar@email.com',
  label: 'Email',
}

const EmailField = (props: EmailFieldProps): JSX.Element => {
  const { value, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
  const errorText = 'You must provide a valid email'

  return (
    <TextField
      autoComplete="email"
      errorText={errorText}
      valid={emailValid}
      value={value}
      {...rest}
    />
  )
}

export default EmailField
