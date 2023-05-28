import { StyleSheet } from "react-native"
import { DrawerView, Text } from "../../../components"

const ProfileScreen = ({ route, navigation }: any) => {
  return (
    <DrawerView style={styles.container}>
      <Text>Hello</Text>
    </DrawerView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
  },
})
