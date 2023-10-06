import { styled } from 'styled-components/native'

export const PasswordRuleContainer = styled.View(() => {
  return {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
  }
})

interface PasswordRuleProps {
  valid?: boolean
}

export const PasswordRule = styled.Text<PasswordRuleProps>((props) => {
  return {
    flex: 1,
    color: props.valid ? props.theme.colors.primary.default : props.theme.colors.text.light,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '12px',
    lineHeight: '18px',
  }
})
