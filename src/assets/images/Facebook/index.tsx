import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"

import { styled } from "nativewind"

const Facebook = (props: any) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <G clipPath="url(#clip0_145_3740)">
      <Path
        d="M19.9999 0C31.0462 0 40 8.95499 40 20.0001C40 31.0464 31.0462 40 19.9999 40C8.95362 40 0 31.0462 0 20.0001C0 8.95499 8.95376 0 19.9999 0Z"
        fill="#3B5998"
      />
      <Path
        d="M22.4351 13.7687H25.0126V9.96118H21.9827V9.97491C18.3114 10.1049 17.5589 12.1687 17.4926 14.3362H17.485V16.2375H14.9851V19.9662H17.485V29.9611H21.2526V19.9662H24.3388L24.935 16.2375H21.2538V15.0888C21.2538 14.3562 21.7413 13.7687 22.4351 13.7687Z"
        fill="white"
      />
    </G>
  </Svg>
)
export default styled(Facebook)
