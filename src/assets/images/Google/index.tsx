import { View } from 'react-native'
import Svg, { G, Path, type SvgProps } from 'react-native-svg'

interface GoogleProps extends SvgProps {
  width?: number | string
  height?: number | string
}

const Google = ({ height, width, ...props }: GoogleProps): JSX.Element => {
  const originalWidth = 40
  const originalHeight = 40
  const aspectRatio = originalWidth / originalHeight
  return (
    <View style={{ height, width, aspectRatio }}>
      <Svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        {...props}
      >
        <Path
          d="M19.9999 0C31.0462 0 40 8.95499 40 20.0001C40 31.0464 31.0462 40 19.9999 40C8.95362 40 0 31.0462 0 20.0001C0 8.95499 8.95376 0 19.9999 0Z"
          fill="#E7E7E7"
        />
        <G clipPath="url(#clip1_1063_706)">
          <Path
            d="M14.3884 18.1371C15.1655 15.7822 17.3786 14.0909 19.9999 14.0909C21.409 14.0909 22.6817 14.5909 23.6817 15.4091L26.5908 12.5C24.8181 10.9545 22.5453 10 19.9999 10C16.0583 10 12.6647 12.2486 11.0332 15.5417L14.3884 18.1371Z"
            fill="#EA4335"
          />
          <Path
            d="M23.3673 25.0105C22.4591 25.5969 21.3051 25.9091 20 25.9091C17.3888 25.9091 15.1826 24.2307 14.3975 21.8899L11.0312 24.4458C12.6607 27.7447 16.0542 30 20 30C22.4441 30 24.7795 29.1312 26.5285 27.4996L23.3673 25.0105Z"
            fill="#34A853"
          />
          <Path
            d="M26.5285 27.4996C28.3576 25.7934 29.5455 23.253 29.5455 19.9999C29.5455 19.409 29.4545 18.7727 29.3182 18.1818H20V22.0454H25.3636C25.099 23.3446 24.3886 24.351 23.3673 25.0104L26.5285 27.4996Z"
            fill="#4A90E2"
          />
          <Path
            d="M14.3975 21.89C14.1986 21.297 14.0909 20.6615 14.0909 20.0001C14.0909 19.3486 14.1954 18.7224 14.3885 18.1372L11.0333 15.5417C10.3638 16.8838 10 18.3962 10 20.0001C10 21.5997 10.3707 23.1085 11.0312 24.4459L14.3975 21.89Z"
            fill="#FBBC05"
          />
        </G>
      </Svg>
    </View>
  )
}

export default Google
