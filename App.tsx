import { NavigationContainer } from "@react-navigation/native"
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack"

import DrawerNavigator from "./src/components/customDrawer"
import MSDetailScreen from "./src/screens/main/MSDetailsScreen"
import { AuthUserProvider } from "./src/context/userContext"

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
}

const { Navigator, Screen } = createStackNavigator()

const DrawerStack = () => {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
      initialRouteName="Drawer1"
    >
      <Screen
        options={{
          gestureEnabled: false,
        }}
        name="MSDetail"
        component={MSDetailScreen}
      />
      <Screen name="Drawer1" component={DrawerNavigator} />
    </Navigator>
  )
}

const RootStack = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthUserProvider>
      <RootStack />
    </AuthUserProvider>
  )
}
