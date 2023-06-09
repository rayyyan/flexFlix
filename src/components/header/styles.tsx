import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // paddingTop: 5
    justifyContent: "space-between",
    marginBottom: 24,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  greeting: {
    marginLeft: 16,
    flexDirection: "column",
  },
  menu: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
})
