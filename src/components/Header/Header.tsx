import { type ViewProps } from 'react-native'

import * as Styled from './styles'

export interface HeaderProps extends ViewProps {
  children?: JSX.Element[] | JSX.Element
  align?: 'center' | 'left' | 'right' | 'between'

  gap?: string
}

const defaultValues: HeaderProps = {
  align: 'left',
}

const Header = (props: HeaderProps): JSX.Element => {
  const { children, ...rest } = { ...defaultValues, ...props }

  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default Header
