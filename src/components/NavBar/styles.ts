import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

export const ReminderText = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
  }
})
export const Reminder = styled.View((props) => {
  return {
    backgroundColor: props.theme.colors.background.default,

    paddingVertical: '12px',
    paddingHorizontal: '20px',
    alignSelf: 'center',
    borderRadius: '20px',
    position: 'absolute',

    width: '100%',
    maxWidth: '400px',

    shadowColor: '#000',
    shadowOpacity: '0.37',
    shadowRadius: '8px',
    elevation: '12',
  }
})

export const Container = styled.View((props) => {
  return {
    backgroundColor: props.theme.colors.background.container,
    height: '72px',
    width: '80%',
    alignSelf: 'center',
    borderRadius: '20px',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    maxWidth: '400px',

    shadowColor: '#000',
    shadowOpacity: '0.37',
    shadowRadius: '8px',
    elevation: '12',
  }
})

export const Selector = styled(Animated.View)(() => {
  return {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    zIndex: -1,
    position: 'absolute',
    width: '33%',
  }
})

export const Background = styled(Animated.View)((props) => {
  return {
    width: '36px',
    height: '36px',
    borderRadius: '12px',
    backgroundColor: props.theme.colors.primary.default,
  }
})
