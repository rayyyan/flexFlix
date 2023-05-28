import { StyleSheet } from "react-native"
import {
  COLORS,
  CONSTANTS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  general,
} from "../../../utils"
import { FontWeight } from "../../../utils/types"

export const moviesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    overflow: "hidden",
  },
  shadows: {
    flex: 1,
    height: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 18,
    },
    shadowOpacity: 0.1,
    shadowRadius: 35.0,
    elevation: 3,
    marginTop: -17,
    zIndex: -1,
  },
  flatList: {
    height: SCREEN_HEIGHT * 0.7,
    marginHorizontal: -22,
  },
  flatListContent: {
    gap: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  separator: {
    width: 22,
  },
  text: {
    fontSize: general.text.text,
    fontWeight: FontWeight.Regular,
    textAlign: "center",
  },
  headerLG: {
    paddingTop: CONSTANTS.statusbarHeight,
    height: SCREEN_HEIGHT * 0.12,
    width: SCREEN_WIDTH,
    alignSelf: "center",
    paddingHorizontal: CONSTANTS.Screen_Padding,
    borderBottomLeftRadius: CONSTANTS.borderRadius * 2,
    borderBottomRightRadius: CONSTANTS.borderRadius * 2,
    zIndex: 888,
  },
})
