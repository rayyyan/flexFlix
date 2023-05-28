import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native"
import Text from "../text"
import { styles } from "./styles"
import React from "react"
import { general } from "../../utils"

interface IProfileIcon extends TouchableOpacityProps {
  size: number
  isAvatar?: boolean
  notificationNumber?: number
  image?: string
}
import IMAGE from "../../images/products/bag1.png"

const DEFAULT_IMAGE = Image.resolveAssetSource(IMAGE)
export const ProfileIcon = React.memo((props: IProfileIcon) => {
  const {
    size = 45,
    isAvatar = false,
    notificationNumber,
    image = DEFAULT_IMAGE,
    ...tProps
  } = props
  return (
    <TouchableOpacity style={styles.center} {...tProps}>
      <View
        style={[
          styles.container,
          {
            opacity: isAvatar ? 1 : 0.6,
            width: size,
            height: size - 10,
          },
        ]}
      />

      <View
        style={{
          width: size,
          height: size,
          backgroundColor: "white",
          position: "absolute",
          borderRadius: size,
        }}
      />
      <View>
        {isAvatar && (
          <View
            style={[
              styles.notification,
              {
                left: size - 16,
              },
            ]}
          >
            <Text color="white" fontSize={general.text.text - 5}>
              {notificationNumber}
            </Text>
          </View>
        )}
        <Image
          source={{
            uri: image.toString(),
          }}
          resizeMode="contain"
          style={{
            width: size - 3,
            height: size - 3,
            borderRadius: size,
          }}
        />
      </View>
    </TouchableOpacity>
  )
})
