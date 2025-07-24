import TextField, { TextFieldProps } from '@components/FormFields/TextField'
import Icon from '@components/Icon'

export type SearchFieldProps = TextFieldProps

const defaultProps: SearchFieldProps = {
  placeholder: 'Search',
}

const SearchField = (props: SearchFieldProps): JSX.Element => {
  const { ...rest } = {
    ...defaultProps,
    ...props,
  }

  return (
    <TextField
      icon={<Icon.Search />}
      {...rest}
    />
  )
}

export default SearchField
