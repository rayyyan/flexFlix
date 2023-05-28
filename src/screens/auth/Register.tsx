import { useState } from "react"
import { TypeNavigationScreen } from "../../utils/types/navigationTypes"
import { useNavigation } from "@react-navigation/native"
import useAuth from "../../hooks/useAuth"
import { FirebaseError } from "firebase/app"
import { Button, DrawerView, Space, Text, TextInput } from "../../components"
import { moviesStyles } from "../main/movieScreen/styles"
import { StatusBar } from "expo-status-bar"
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native"
import { COLORS, SCREEN_HEIGHT } from "../../utils"
import { SafeAreaView } from "react-native-safe-area-context"

const RegisterScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation<TypeNavigationScreen>()
  const [error, setError] = useState<string | null>(null)

  const auth = useAuth()

  const handleRegister = async () => {
    setError(null)
    await auth.register(
      {
        email,
        password,
      },
      (error: FirebaseError) => {
        setError(error.message)
        console.log(error.message)
      }
    )
  }
  return (
    <DrawerView style={moviesStyles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <KeyboardAvoidingView behavior="padding">
          <View
            style={{
              height: SCREEN_HEIGHT / 3.3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text fontSize={24} fontWeight="800">
              FlixFlex
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
              variant="password"
            />
          </View>
          <Text style={{ textAlign: "center" }} color="red">
            {error && error}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              FeedBackType="TouchableOpacity"
              backgroundColor={COLORS.screenBg}
              onPress={async () => await handleRegister()}
              buttonStyle={styles.button}
              title="Register"
            ></Button>

            <Space height={25} />

            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text>
                Already have an Account ?
                <Text color={COLORS.primaryDark} fontWeight="500">
                  {" "}
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </DrawerView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 5,
  },

  buttonContainer: {
    marginTop: 40,
  },
  button: {
    marginBottom: 5,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
})
