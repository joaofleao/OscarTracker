import React from "react"
import LottieView from "lottie-react-native"

import { dots, movie } from "../../assets/animations"

type LoadingComponentProps = {
  animation?: string
  speed?: number
  size?: number
}

const LoadingComponent = ({
  animation = "dots",
  size = 30,
}: LoadingComponentProps) => {
  const render = animation === "dots" ? dots : movie
  const speed = animation === "dots" ? 1 : 0.5
  return (
    <LottieView
      style={{ width: size, height: size }}
      autoPlay={true}
      source={render}
      speed={speed}
      loop={true}
    />
  )
}

export default LoadingComponent
