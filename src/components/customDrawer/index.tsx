import { createDrawerNavigator } from "@react-navigation/drawer"
import { ActivityIndicator, Platform, StyleSheet, View } from "react-native"
import { COLORS, SCREEN_WIDTH } from "../../utils"
import DrawerContainer from "./DrawerContainer"
import { StatusBar } from "expo-status-bar"
import { useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../hooks/firebase"
import { AuthUserContext } from "../../context/userContext"
import { ScreensList, authScreensList } from "../../utils/screensList"

const { Navigator, Screen } = createDrawerNavigator()
const renderScreens = () => {
  return ScreensList.map((screen, index) => (
    <Screen
      key={index}
      name={screen.route}
      component={screen.component}
      options={{
        //@ts-ignore
        item: screen,
        sceneContainerStyle: { backgroundColor: "transparent" },
      }}
    />
  ))
}
const renderAuthScreens = () => {
  return authScreensList.map((screen, index) => (
    <Screen
      key={index}
      name={screen.route}
      component={screen.component}
      options={{
        //@ts-ignore
        item: screen,
        sceneContainerStyle: { backgroundColor: "transparent" },
      }}
    />
  ))
}
const DrawerNavigator = () => {
  // const auth = useAuth()
  const { user, setUser } = useContext(AuthUserContext)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      user ? setUser(user) : setUser(null)
      setLoading(false)
    })
    return () => unSubscribe()
  }, [user])

  if (loading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    )
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />
      <Navigator
        screenOptions={{
          drawerStyle: styles.drawerStyles,
          drawerType: "slide",
          headerShown: false,
          overlayColor: "transparent",
          swipeEdgeWidth: Platform.OS === "android" ? 35 : 260,
          drawerContentStyle: {
            backgroundColor: "red",
          },
        }}
        drawerContent={(props) => <DrawerContainer {...props} />}
      >
        {user ? renderScreens() : renderAuthScreens()}
      </Navigator>
      <View style={styles.circleContainer}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.sceneBg,
    flex: 1,
  },
  drawerStyles: {
    width: 220,
    backgroundColor: "transparent",
  },
  circleContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
  circle1: {
    backgroundColor: COLORS.primary,
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    borderRadius: SCREEN_WIDTH * 2,
    left: SCREEN_WIDTH / 2,
    bottom: "-45%",
    position: "absolute",
  },
  circle2: {
    backgroundColor: COLORS.primary,
    width: SCREEN_WIDTH * 2,
    height: SCREEN_WIDTH * 2,
    borderRadius: SCREEN_WIDTH * 2,
    right: SCREEN_WIDTH,
    bottom: "-85%",
  },
})

export default DrawerNavigator
