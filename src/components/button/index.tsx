import { StyleSheet, Text } from "react-native"
import React from "react"
import { TextStyle } from "react-native"
import { ViewStyle } from "react-native"
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native"
import { Pressable } from "react-native"
import { TouchableOpacityProps } from "react-native"
import { COLORS } from "../../utils"

const ButtonType = {
  TouchableOpacity: TouchableOpacity,
  Pressable: Pressable,
}
interface Button extends TouchableOpacityProps {
  FeedBackType: "TouchableOpacity" | "Pressable"
  title?: string
  buttonAlign?: ViewStyle["alignSelf"]
  buttonStyle?: TouchableOpacityProps["style"]
  backgroundColor?: string
  borderRadius?: number
  textColor?: string
  textStyle?: TextStyle
  width?: number | string
  texColor?: string
  padding?:
    | `${number} ${number} ${number} ${number}`
    | `${number} ${number}`
    | `${number}`
}
// Utils

const Button = (props: Button) => {
  const {
    FeedBackType,
    buttonAlign,
    backgroundColor = COLORS.sceneBg,
    title,
    width = "100%",
    texColor = "white",
    borderRadius = 8,
    padding: allPadding,
    buttonStyle,
    children,
    ...BtnProps
  } = props
  const Btn = ButtonType[FeedBackType]

  return (
    <Btn
      {...BtnProps}
      style={[
        {
          alignSelf: buttonAlign,
          backgroundColor,
          width,
          borderRadius,
        },
        buttonStyle,
      ]}
    >
      {children && children}
      {title && (
        <Text
          style={[
            {
              color: texColor || "black",
              textAlign: "center",
            },
            props?.textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </Btn>
  )
}
export default Button

const styles = StyleSheet.create({})
