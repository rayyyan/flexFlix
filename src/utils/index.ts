import { Dimensions } from "react-native"
import Constants from "expo-constants"
import { CommonActions } from "@react-navigation/native"
import { TypeNavigationScreen } from "./types/navigationTypes"

export const general = {
  text: {
    heading: 18,
    text: 14,
    normal: 16,
  },
  borderColor: "#E7E9ED",
}

export const COLORS = {
  mainColorDark: "rgb(20, 20, 21)",
  mainColorLight: "rgb(255, 255, 255)",
  defaultLightText: "#6F6F6F",
  lightGray: "#F4F4F5",
  primary: "#0291cf",
  primaryDark: "#134a8b",
  normal: "#b0e6fd",
  important: "#e892ab",
  icon1: "#ea7a72",
  icon2: "#f8c907",
  icon3: "#82a7c9",
  icon4: "#c2c5d1",
  light: "#f0f0f0",
  gray: "#CCCCCC",
  darkGray: "#999999",
  dark: "#123",
  black: "#000",
  white: "white",
  active: "#05294a99",
  sceneBg: "#171d33",
  screenBg: "#05294a",
}

export const CONSTANTS = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
  statusbarHeight: Constants.statusBarHeight,
  Screen_Padding: 22,
}

export const ALPHA = Math.PI / 210
export const perspective = { perspective: 1000 }

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get("screen")

export const SRC_WIDTH = Dimensions.get("window").width
export const CARD_LENGTH = SRC_WIDTH * 0.75
export const SPACING = SRC_WIDTH * 0.025
export const returnPadding = (allPadding: string) => {
  if (allPadding.split(" ").length - 1 === 3)
    return {
      paddingTop: +allPadding?.split(" ")[0],
      paddingRight: +allPadding?.split(" ")[1],
      paddingBottom: +allPadding?.split(" ")[2],
      paddingLeft: +allPadding?.split(" ")[3],
    }
  if (allPadding.split(" ").length - 1 == 1)
    return {
      paddingVertical: +allPadding?.split(" ")[0],
      paddingHorizontal: +allPadding?.split(" ")[1],
    }
  if (!allPadding.includes(" "))
    return {
      padding: +allPadding,
    }
}

export const goBackOnce = (navigation: TypeNavigationScreen) => {
  navigation.dispatch((state) => ({
    ...CommonActions.goBack(),
    target: state.key,
  }))
}
