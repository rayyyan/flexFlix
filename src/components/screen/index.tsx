import Constants from "expo-constants"
import React from "react"
import { StyleSheet, View } from "react-native"
export const OutScreen = React.memo((props: any) => {
  return <View style={[styles.outContainer]}>{props?.children}</View>
})
export const InScreen = React.memo((props: any) => {
  return <View style={[styles.container]}>{props?.children}</View>
})

const Screen = React.memo((props: any) => {
  return (
    <View
      style={[
        styles.pageContainer,
        styles.container,
        {
          backgroundColor: "white",
        },
      ]}
    >
      {props?.children}
    </View>
  )
})
const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: Constants.statusBarHeight + 15,
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  outContainer: {
    marginHorizontal: -24,
  },
})
export default Screen
