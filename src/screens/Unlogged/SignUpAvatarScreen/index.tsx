import { Text, View } from 'react-native'

import { Button, Global, Header, Icon, Input } from '../../../components'
import { type SignUpAvatarScreenProps } from '../../../types'
import { routes } from '../../../utils'

const SignUpAvatarScreen = ({ navigation }: SignUpAvatarScreenProps): JSX.Element => {
  const handleNext = (): void => {
    navigation.navigate(routes.unlogged.signUpName)
  }

  return (
    <Global.Screen>
      <View
      // className="flex-1 mx-4 justify-between"
      >
        <Header.Root>
          <Button
            onPress={navigation.goBack}
            icon={<Icon.ArrowLeft />}
            variant="secondary"
          />
          <Header.TextContainer>
            <Header.Title>Register</Header.Title>
          </Header.TextContainer>
        </Header.Root>

        <View
        // className="flex-1 justify-center"
        >
          <Text
          // className="text-white font-primaryRegular text-2xl mb-4"
          >
            Now let’s wrap it up with a cool profile picture
          </Text>
          <Text
          // className="text-white font-primaryRegular text-base"
          >
            Feel free to use any image
          </Text>
        </View>

        <Input
          placeholder="Name"
          // className="my-4"
        />

        <View
        // className="flex-1"
        />

        <View
        // className="items-center justify-center my-4 "
        >
          <Button
            label="Next"
            // className="w-60"
            onPress={handleNext}
          />
        </View>
      </View>
    </Global.Screen>
  )
}

export default SignUpAvatarScreen
