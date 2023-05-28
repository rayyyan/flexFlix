import React from "react"
import { View } from "react-native"
import { COLORS } from "../../utils"
import DrawerItem from "./DrawerItem"

const DrawerItemList = ({ state, descriptors, navigation, styles }: any) => {
  return (
    <View style={styles.view}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index
        const { options } = descriptors[route.key]

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          })
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }
        {
          /* console.log(options) */
        }

        const drawerItem = options.item
        const color = isFocused ? COLORS.light : COLORS.gray
        const activeItemColor = isFocused ? COLORS.primary : null

        return (
          <DrawerItem
            key={index}
            label={drawerItem.label}
            tabBarTestID={options.tabBarTestID}
            onPress={onPress}
            name={drawerItem.icon}
            type={drawerItem.type}
            notification={drawerItem.notification}
            color={color}
            activeItemColor={activeItemColor}
            styles={styles}
          />
        )
      })}
    </View>
  )
}

export default DrawerItemList
