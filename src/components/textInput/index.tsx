import {
  StyleSheet,
  TextInput as RnTextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"

interface ITextInput extends TextInputProps {
  placeHolder?: string
  variant?: "password" | "text"
}
const TextInput = React.memo(({ variant, ...restProps }: ITextInput) => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <View style={styles.container}>
      <RnTextInput
        {...restProps}
        style={{
          fontSize: 14,
          paddingHorizontal: 16,
        }}
        secureTextEntry={restProps.secureTextEntry ? !visible : false}
      />
      {variant === "password" && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            setVisible(!visible)
          }}
        >
          <Feather
            name={!visible ? "eye" : "eye-off"}
            size={18}
            color="#292D32"
          />
        </TouchableOpacity>
      )}
    </View>
  )
})
export default TextInput
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    paddingVertical: 10,
    borderRadius: 24,
    width: "100%",
  },
  icon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 15,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
})
