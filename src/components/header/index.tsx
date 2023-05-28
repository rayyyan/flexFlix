import { TouchableOpacity, View } from "react-native"
import Text from "../text"

import { styles } from "./styles"

import { LinearGradientProps } from "expo-linear-gradient"
import {
  COLORS,
  CONSTANTS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  general,
} from "../../utils"
import { Menu } from "../../images/components/menu"
import { FontWeight } from "../../utils/types"
import { ProfileIcon } from "../profileIcon"
interface IHeader extends Omit<LinearGradientProps, "colors"> {}
const Header = ({ navigation, ...props }: IHeader & any) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        paddingTop: CONSTANTS.statusbarHeight + 25,
        height: SCREEN_HEIGHT * 0.14,
        width: SCREEN_WIDTH,
        alignSelf: "center",
        paddingHorizontal: CONSTANTS.Screen_Padding,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={styles.container}>
            <View style={styles.subContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <ProfileIcon
                  image={
                    "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c9/c9b135fac10c43eafe592c71cfd76ef44ce219aa_full.jpg"
                  }
                  isAvatar
                  size={45}
                />
              </TouchableOpacity>
              <View style={styles.greeting}>
                <Text
                  fontSize={14}
                  fontWeight={FontWeight.Regular}
                  color={COLORS.light}
                >
                  {"greeting"}
                </Text>
                <Text
                  fontSize={general.text.heading}
                  fontWeight={FontWeight["Medium"]}
                  color={COLORS.light}
                >
                  {"username"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Menu style={styles.menu} onPress={() => navigation.openDrawer()} />
        </View>
      </View>
      {props.children}
    </View>
  )
}

export default Header
