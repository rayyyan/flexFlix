import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useRef } from "react"
import { DrawerContentComponentProps } from "@react-navigation/drawer"
import Animated from "react-native-reanimated"
import DrawerItemList from "./DrawerItemList"
import { COLORS, CONSTANTS } from "../../utils"
import { SafeAreaView } from "react-native-safe-area-context"

const DrawerContainer = (props: DrawerContentComponentProps) => {
  // const { state, descriptors, navigation } = props
  const scrollRef = useRef(null)

  // const [show, toggleProfile] = useReducer((s) => !s, false)

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        {/* header */}

        {/* Drawer List Item */}
        <Animated.ScrollView
          ref={scrollRef}
          {...props}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            height: "100%",
          }}
        >
          <DrawerItemList {...props} styles={styles} />
          {/* 2nd menu */}

          {/* profile menu */}
        </Animated.ScrollView>
        {/* footer */}
        <TouchableOpacity></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default DrawerContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.sceneBg,
  },
  view: {
    borderRadius: CONSTANTS.borderRadius,
    marginHorizontal: CONSTANTS.SPACING / 2,
    paddingVertical: CONSTANTS.SPACING / 1.5,
  },
  marginTop: {
    marginTop: CONSTANTS.SPACING / 2,
  },
  marginBottom: {
    marginBottom: CONSTANTS.SPACING / 2,
  },
  marginVertical: {
    marginVertical: CONSTANTS.SPACING / 2,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: CONSTANTS.SPACING / 2.2,
    paddingVertical: CONSTANTS.SPACING / 1.2,
    justifyContent: "space-between",
    borderRadius: CONSTANTS.borderRadius,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: CONSTANTS.textFontSize,
    color: COLORS.dark,
    paddingHorizontal: CONSTANTS.SPACING,
  },
  notificationBadge: {
    paddingVertical: CONSTANTS.SPACING / 5,
    paddingHorizontal: CONSTANTS.SPACING / 2,
    borderRadius: CONSTANTS.borderRadius / 2,
  },
  iconContainer: {
    padding: CONSTANTS.SPACING / 2.4,
    borderRadius: CONSTANTS.borderRadius,
    margin: CONSTANTS.SPACING / 2,
    backgroundColor: COLORS.primary,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.darkGray,
    marginVertical: CONSTANTS.SPACING / 2,
  },
  headerTitle: {
    fontSize: CONSTANTS.titleFontSize,
    color: COLORS.dark,
  },
  profile: {
    marginVertical: CONSTANTS.SPACING / 2,
    marginRight: CONSTANTS.SPACING,
    marginLeft: CONSTANTS.SPACING / 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.light,
  },
  profileText: {
    color: COLORS.dark,
  },
})
