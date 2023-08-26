import { DimensionValue, View } from 'react-native'
import Svg, { Path, type SvgProps } from 'react-native-svg'

interface LogoProps extends SvgProps {
  width?: number | string
  height?: number | string
}

const Logo = ({ height, width, ...props }: LogoProps): JSX.Element => {
  const originalWidth = 33
  const originalHeight = 100
  // const aspectRatio = originalWidth / originalHeight
  return (
    <View style={{ height: height as DimensionValue, width: width as DimensionValue }}>
      <Svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        {...props}
      >
        <Path
          fill="#F7B239"
          d="M23.668 16.123l4.233 1.778c1.409.59 2.247 1.906 2.096 3.284l-1.519 13.878a1.818 1.818 0 01-1.525 1.589 1.813 1.813 0 00-1.532 1.898l.68 10.42c.203 3.11-.573 6.21-2.241 8.948l-.062.1c-.61 1-.81 2.191-.56 3.331l.819 3.742a13.457 13.457 0 01-.178 6.477l-2.395 8.663c-.35 1.278-.088 2.626.726 3.725l1.16 1.56a4.683 4.683 0 003.76 1.877H30a3 3 0 013 3v6.77a3 3 0 01-3 3H3a3 3 0 01-3-3v-6.77a3 3 0 013-3h2.867a4.682 4.682 0 003.759-1.877l1.16-1.56c.817-1.1 1.08-2.447.726-3.725L9.12 71.568a13.458 13.458 0 01-.178-6.477l.818-3.743A4.528 4.528 0 009.2 58.02l-.062-.102C7.47 55.18 6.693 52.08 6.895 48.97l.68-10.42a1.813 1.813 0 00-1.531-1.898 1.818 1.818 0 01-1.525-1.59L3.002 21.186c-.15-1.378.688-2.694 2.096-3.284l4.234-1.778c1.91-.801 2.923-2.69 2.422-4.514l-1.285-4.683a5.105 5.105 0 01-.181-1.34c0-1.218.441-2.414 1.269-3.356A6.541 6.541 0 0116.5 0a6.54 6.54 0 014.943 2.23 5.078 5.078 0 011.085 4.696l-1.285 4.682c-.499 1.825.512 3.714 2.425 4.515z"
        />
      </Svg>
    </View>
  )
}

export default Logo
