import React from 'react'

import { OscarLogo } from '../../assets/images'
import * as Styled from './styles'

const Logo = (): JSX.Element => {
  return (
    <Styled.Container>
      <OscarLogo />

      <Styled.Texts>
        <Styled.Title>oscar</Styled.Title>
        <Styled.Title>tracker</Styled.Title>
      </Styled.Texts>
    </Styled.Container>
  )
}

export default Logo
