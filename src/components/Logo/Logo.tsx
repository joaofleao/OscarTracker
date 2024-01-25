import { View } from 'react-native'

import * as Styled from './styles'
import { OscarLogo } from '@assets/images'

const Logo = (): JSX.Element => {
  return (
    <Styled.Container>
      <OscarLogo />
      <View>
        <Styled.Title>oscar</Styled.Title>
        <Styled.Title>tracker</Styled.Title>
      </View>
    </Styled.Container>
  )
}

export default Logo
