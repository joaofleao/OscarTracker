import { type TextInputProps } from 'react-native'

import TextField from '@components/FormFields/TextField'
import Icon from '@components/Icon'

export interface SearchFieldProps extends TextInputProps {
  placeholder?: string
}

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
      iconPosition="trailing"
      {...rest}
    />
  )
}

export default SearchField
