import {
  Image,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native"
import { styles } from "./styles"
import React from "react"
import Settings from "../../images/components/settings"
import Text from "../text"
import { POSTER_IMAGE } from "../../utils/config"
import { Movie } from "../../utils/types"

interface ISearchInput extends TextInputProps {
  placeHolder?: string
  filterPress?: () => void
  itemPress?: (arg: Movie) => void
  data?: Movie[]
}
const SearchInput = ({
  placeHolder = "Search",
  filterPress = () => console.log("filterPress"),
  itemPress,
  data,
  ...restProps
}: ISearchInput) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={"#949494"}
        style={{
          fontSize: 14,
          paddingHorizontal: 16,
          zIndex: 9999,
        }}
        {...restProps}
      />
      {data && data.length > 0 && (
        <View style={{ marginBottom: 35 }}>
          {data.map((movie) => (
            <TouchableOpacity
              onPress={() => itemPress && itemPress(movie)}
              key={movie.id}
              style={styles.searchItems}
            >
              <Image
                source={{
                  uri: `${POSTER_IMAGE}${movie.poster_path}`,
                }}
                style={{
                  width: 25,
                  height: 35,
                }}
              />
              <Text>{movie.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <TouchableOpacity style={styles.icon}>
        <Settings onPress={() => filterPress()} size={18} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput
