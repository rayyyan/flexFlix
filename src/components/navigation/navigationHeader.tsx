import { StyleSheet, TouchableOpacity, View } from "react-native"
import { COLORS, general, goBackOnce } from "../../utils"
import { FontWeight } from "../../utils/types"
import Text from "../text"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { TypeNavigationScreen } from "../../utils/types/navigationTypes"

const NavigationHeader = ({ title, icon, onPress }: any) => {
  const navigation = useNavigation<TypeNavigationScreen>()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBackOnce(navigation)}>
        <Ionicons
          name="arrow-back-sharp"
          size={28}
          color={COLORS.defaultLightText}
        />
      </TouchableOpacity>
      <Text
        fontSize={general.text.normal}
        fontWeight={FontWeight.Medium}
        style={styles.text}
      >
        {title}
      </Text>
      <AntDesign name={icon} size={22} color={COLORS.defaultLightText} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 15,
  },
  text: {
    letterSpacing: 0.2,
  },
})

export default NavigationHeader
