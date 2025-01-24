import React from 'react'
import { Dimensions, Text, View } from 'react-native'

import useStyles from './styles'
import { CoachmarkProps } from './types'
import Button from '@components/Button'
import Icon from '@components/Icon'
import Modal from '@components/Modal'

const defaultValue: Partial<CoachmarkProps> = {
  visible: false,
  intrusive: false,
}

const Coachmark = (props: CoachmarkProps): JSX.Element => {
  const {
    anchor,
    intrusive,
    title,
    description,
    visible,
    close,
    onNext,
    onPrevious,
    onComplete,
    completeMessage,
  } = {
    ...defaultValue,
    ...props,
  }

  const styles = useStyles({ visible })

  const [coachmarkPosition, setCoachmarkPosition] = React.useState<{
    top?: number
    left?: number
    right?: number
    bottom?: number
  }>()

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

  React.useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    anchor.current?.measureInWindow((x, y, width, height) => {
      setCoachmarkPosition(() => {
        let top, left, right, bottom

        if (screenHeight - y > screenHeight / 2) top = y + height + 12
        else bottom = screenHeight - y + 12

        if (screenWidth - x > screenWidth / 2) left = x
        else right = screenWidth - x - width

        return { top, left, right, bottom }
      })
    })
  }, [anchor, screenHeight, screenWidth, visible])

  const content = (
    <View
      style={[
        styles.root,
        {
          top: coachmarkPosition?.top,
          left: coachmarkPosition?.left,
          bottom: coachmarkPosition?.bottom,
          right: coachmarkPosition?.right,
        },
      ]}
    >
      {title && <Text style={styles.title}>{title}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}

      <View style={styles.footer}>
        {onPrevious && (
          <Button
            icon={<Icon.ArrowLeft style={{ transform: [{ rotate: '180deg' }] }} />}
            size="action"
            variant="outlined"
            onPress={onPrevious}
          />
        )}
        {onNext && (
          <Button
            icon={<Icon.ArrowLeft />}
            size="action"
            variant="outlined"
            onPress={onNext}
          />
        )}
        {onComplete && (
          <Button
            label={completeMessage ?? null}
            icon={
              completeMessage ? (
                <Icon.ArrowLeft style={{ transform: [{ rotate: '180deg' }] }} />
              ) : null
            }
            size="action"
            variant="primary"
            onPress={onComplete}
          />
        )}
      </View>
    </View>
  )

  const intrusiveCoachmark = (
    <Modal.Background
      visible={visible}
      onClickOutside={close}
    >
      {content}
    </Modal.Background>
  )

  return intrusive ? intrusiveCoachmark : content
}

export default Coachmark
