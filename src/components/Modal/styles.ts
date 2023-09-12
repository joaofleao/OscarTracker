import styled from 'styled-components/native'

interface Props {
  closeButton?: boolean
}

export const Background = styled.View((props) => {
  return {
    backgroundColor: props.theme.palette.background.backdrop,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: '80px',
  }
})

export const Modal = styled.View((props) => {
  return {
    backgroundColor: props.theme.palette.background.default,
    padding: '48px',
    paddingTop: '48px',
    borderRadius: '48px',
    maxHeight: '80%',
  }
})

export const HeaderContent = styled.View({
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
})

export const Title = styled.Text<Props>((props) => {
  return {
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '26px',
    lineHeight: '36px',
    color: props.theme.palette.text.default,
    flex: 1,
    marginRight: props.closeButton ? '28px' : '0px',
  }
})

export const Description = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '20px',
    lineHeight: '36px',
    color: props.theme.palette.text.disabled,
    marginVertical: '20px',
  }
})

export const Footer = styled.View({
  alignItems: 'center',
})
