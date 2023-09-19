import styled from 'styled-components/native'

export const Content = styled.ScrollView(() => {
  return {
    paddingHorizontal: '20px',
  }
})

export const ContentContainer = styled.View(() => {
  return {
    flex: 1,
    gap: '40px',
  }
})
