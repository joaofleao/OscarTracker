import styled from 'styled-components/native'

export const Container = styled.View(() => {
  return {
    gap: '4px',
  }
})

export const Row = styled.View(() => {
  return {
    flexDirection: 'row',
    gap: '8px',
  }
})

export const Content = styled.Pressable((props) => {
  return {
    backgroundColor: props.theme.colors.background.container,
    borderRadius: '14px',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '12px',
    paddingHorizontal: '14px',
    gap: '8px',
    flex: 1,
  }
})

export const Input = styled.TextInput((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '16px',
    height: '20px',
    flex: 1,
  }
})

type LabelProps = {
  isFocused: boolean
}

export const Label = styled.Text<LabelProps>((props) => {
  return {
    color: props.isFocused ? props.theme.colors.primary.default : props.theme.colors.text.light,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '12px',
    lineHeight: '18px',
  }
})
