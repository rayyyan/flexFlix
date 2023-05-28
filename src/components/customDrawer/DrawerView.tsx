import { useDrawerProgress } from "@react-navigation/drawer"
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated"
import { ALPHA, SCREEN_WIDTH, perspective } from "../../utils"
import { Keyboard, TouchableWithoutFeedback, ViewProps } from "react-native"

interface IDrawerView extends ViewProps {
  navigation?: any
}
const DrawerView = ({ children, style, navigation }: IDrawerView) => {
  const drawerProgress = useDrawerProgress() as Animated.SharedValue<number>

  const viewStyle = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8])

    const rotateY = interpolate(drawerProgress.value, [0, 1], [0, 35])

    const translateX = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, (SCREEN_WIDTH - 220) / -2 + 30]
    )

    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 24])

    return {
      transform: [
        perspective,
        {
          rotateY: `${-rotateY - (30 * rotateY * -ALPHA) / 180}deg`,
        },
        { translateX },
        {
          scale,
        },
      ],
      borderRadius,
    }
  })

  return (
    <TouchableWithoutFeedback
      style={{
        flex: 1,
      }}
      onPress={() => Keyboard.dismiss()}
    >
      <>
        <Animated.View
          style={[style, { flex: 1, paddingHorizontal: 22 }, viewStyle]}
        >
          {children}
        </Animated.View>
      </>
    </TouchableWithoutFeedback>
  )
}

export default DrawerView
