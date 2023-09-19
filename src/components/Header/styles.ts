import { styled } from 'styled-components/native'

interface Props {
  align?: 'center' | 'left' | 'right' | 'between'
}

export const Container = styled.View<Props>((props) => {
  const getAlignment = (): string => {
    if (props.align === 'between') return 'space-between'
    if (props.align === 'center') return 'center'
    if (props.align === 'right') return 'flex-end'
    return 'flex-start'
  }
  return {
    flexDirection: 'row',
    gap: '20px',

    justifyContent: getAlignment(),
    marginHorizontal: '20px',
    marginTop: '10px',
    marginBottom: '20px',
    alignItems: 'flex-start',
  }
})
