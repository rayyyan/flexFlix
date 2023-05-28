import { FlatList, ScrollView, TouchableOpacity, View } from "react-native"

import { COLORS } from "../../../utils"
import {
  FontWeight,
  GeneralScreenProps,
  Movie,
  MovieListResponse,
} from "../../../utils/types"
import { TypeNavigationScreen } from "../../../utils/types/navigationTypes"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import useMovies from "../../../hooks/useMovies"
import {
  AntDesign,
  Book,
  DrawerView,
  Header,
  InScreen,
  OutScreen,
  SearchInput,
  Space,
  Text,
} from "../../../components"
import { LinearGradient } from "expo-linear-gradient"
import { POSTER_IMAGE } from "../../../utils/config"
import { moviesStyles } from "./styles"

const MoviesScreen = ({ route, navigation }: GeneralScreenProps) => {
  const newNavigation = useNavigation<TypeNavigationScreen>()
  const [data, setData] = useState<MovieListResponse | undefined>()
  const [topMovies, setTopMovies] = useState<MovieListResponse | undefined>()
  const [searchedMovies, setSearchedMovies] = useState<Movie[] | undefined>()
  const [page, setPage] = useState<number>(1)
  const movies = useMovies()
  const moviesPerPage = 10

  useEffect(() => {
    getPaginatedMovies()
    getTopMovies()
  }, [page])

  const getPaginatedMovies = async () => {
    try {
      const response = await movies.getMovies(`/discover/movie?page=${page}`)
      setData((prevData) => {
        const newData = response as MovieListResponse
        return prevData
          ? {
              ...newData,
              results: [...prevData.results, ...newData.results],
            }
          : newData
      })
    } catch (error) {
      console.error("Failed to fetch movies:", error)
    }
  }

  const getTopMovies = async () => {
    try {
      const response = await movies.getMovies(`/movie/top_rated`)
      setTopMovies(response as MovieListResponse)
    } catch (error) {
      console.error("Failed to fetch top movies:", error)
    }
  }

  const handlePress = (id: number) => {
    newNavigation.navigate("MSDetail", { id: id.toString(), movie: true })
  }

  const startIndex = (page - 1) * moviesPerPage
  const endIndex = startIndex + moviesPerPage
  const displayedMovies = data?.results?.slice(startIndex, endIndex)

  const showNext = () => {
    if (data && page < data?.total_pages) setPage((prevPage) => prevPage + 1)
  }

  const showPrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1)
    }
  }

  const HandleSearch = async (text: string) => {
    setSearchedMovies([])
    if (text.length > 2)
      try {
        const searchedMoviesList = (await movies.getMovies(
          `/search/movie?query=${text}&include_adult=false&language=en-US&primary_release_year=nklj&page=1&region=jkj&year=hkh`
        )) as MovieListResponse

        setSearchedMovies(searchedMoviesList.results as unknown as Movie[])
      } catch (error) {}
  }
  const itemPress = (item: Movie) => {
    handlePress(item.id)
  }

  return (
    <DrawerView style={moviesStyles.container}>
      <ScrollView style={moviesStyles.flatList} stickyHeaderIndices={[1]}>
        <Header navigation={navigation}>
          <Space height={10} />
        </Header>

        <OutScreen>
          <LinearGradient
            colors={[COLORS.primary, COLORS.primaryDark]}
            style={moviesStyles.headerLG}
          >
            <SearchInput
              onChangeText={async (text) => {
                await HandleSearch(text)
              }}
              placeHolder={"Search"}
              data={searchedMovies && searchedMovies.slice(0, 12)}
              itemPress={itemPress}
            />
          </LinearGradient>
          <View style={moviesStyles.shadows} />
          <Space height={10} />
          <InScreen>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 15,
              }}
            >
              <TouchableOpacity onPress={async () => await showPrev()}>
                <AntDesign
                  name="caretleft"
                  size={24}
                  color={page === 1 ? "grey" : "black"}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={async () => await showNext()}>
                <AntDesign name="caretright" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </InScreen>
          <Space height={8} />

          <Space height={25} />
        </OutScreen>
        <InScreen>
          <Text fontSize={18} fontWeight={FontWeight["Medium"]}>
            Top 5 Movies List
          </Text>
          <FlatList
            data={topMovies?.results.slice(0, 5)}
            horizontal
            contentContainerStyle={{
              gap: 15,
            }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(item.id)}
              >
                <Book
                  title={item.title}
                  image={`${POSTER_IMAGE}${item.poster_path}`}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.title}
          />
        </InScreen>
        <InScreen>
          <Text fontSize={18} fontWeight={FontWeight["Medium"]}>
            Movies List
          </Text>
        </InScreen>
        <Space height={8} />
        {data && (
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {displayedMovies?.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(item.id)}
              >
                <Book
                  title={item.title}
                  image={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
                />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </DrawerView>
  )
}

export default MoviesScreen
