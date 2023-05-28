import { View, Dimensions } from "react-native"
import { FontWeight } from "../../utils/types"
import Text from "../text"
import { styles } from "./styles"
import React from "react"
import { general } from "../../utils"

interface IMovieInfo {
  label: string
  info: string
}
const MovieInfo = ({ label, info }: IMovieInfo) => {
  return (
    <View style={styles.container}>
      <Text fontSize={general.text.text - 1} fontWeight={FontWeight.Medium}>
        {label}
      </Text>
      <Text fontSize={general.text.text - 3} fontWeight={FontWeight.Regular}>
        {info}
      </Text>
    </View>
  )
}

export default MovieInfo
