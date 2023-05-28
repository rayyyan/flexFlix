import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    paddingVertical: 10,
    borderRadius: 24,
    width: "100%",
  },
  icon: {
    position: "absolute",
    top: 15,
    right: 15,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  searchItems: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 8,
  },
})
