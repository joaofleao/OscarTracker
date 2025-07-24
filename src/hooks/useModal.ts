import React from 'react'

type useModalReturn = [open: boolean, setOpen: () => void, setClose: () => void]

const useModal = (initialValue = false): useModalReturn => {
  const [visible, setVisible] = React.useState(initialValue)

  const setOpen = (): void => {
    setVisible(true)
  }
  const setClose = (): void => {
    setVisible(false)
  }

  return [visible, setOpen, setClose]
}

export default useModal
