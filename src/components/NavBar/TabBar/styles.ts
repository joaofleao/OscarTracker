import { styled } from 'styled-components/native'

export const Container = styled.Pressable(() => {
  return {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  }
})
