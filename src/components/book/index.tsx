import { Image, View } from "react-native"
import Space from "../space"
import Text from "../text"
import { general } from "../../utils"
import { FontWeight } from "../../utils/types"

import React from "react"

const Book = ({ image, title }: any) => {
  return (
    <View
      style={{
        maxWidth: 150,
        paddingBottom: 20,
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 180,
          width: 150,
          borderRadius: 10,
        }}
        resizeMode="cover"
      />
      <Space height={8} />
      <Text
        numberOfLines={2}
        fontSize={general.text.normal}
        fontWeight={FontWeight.Medium}
      >
        {title}
      </Text>
    </View>
  )
}
export default Book
