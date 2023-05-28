import { Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../utils"

const DrawerItem = ({
  label,
  onPress,
  tabBarTestID,
  type,
  name,
  notification,
  activeItemColor,
  color,
  styles,
}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={[styles.drawerItem, { backgroundColor: activeItemColor }]}
    >
      <View style={styles.row}>
        {/* <Icon type={type} name={name} {...{ color }} /> */}
        <Text style={[styles.label, { color }]}>{label}</Text>
      </View>
      {notification > 0 && (
        <View
          style={[
            styles.notificationBadge,
            {
              backgroundColor:
                notification > 5 ? COLORS.important : COLORS.normal,
            },
          ]}
        >
          <Text>{notification}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default DrawerItem
