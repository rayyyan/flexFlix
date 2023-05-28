import React from "react"
import { View } from "react-native"
import Text from "../text"
import Space from "../space"
import { general } from "../../utils"
import { FontWeight } from "../../utils/types"

export const TitleSubTitle = React.memo(
  ({
    title = "Mira Suxi",
    subTitle = "Horizen27@gmail.com",
  }: {
    title?: string
    subTitle?: string
  }) => {
    return (
      <View
        style={{
          marginLeft: 15,
        }}
      >
        <Text
          fontSize={general.text.heading}
          fontWeight={FontWeight["Extra Bold"]}
        >
          {title}
        </Text>
        <Space height={2} />
        <Text fontSize={general.text.text - 2} fontWeight={FontWeight.Regular}>
          {subTitle}
        </Text>
      </View>
    )
  }
)
