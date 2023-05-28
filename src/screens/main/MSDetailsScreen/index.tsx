import { useRoute } from "@react-navigation/native"
import React, { useEffect, useState } from "react"

//## React UI Components
import { ActivityIndicator, LogBox, TouchableOpacity, View } from "react-native"
//## custom Components
import {
  AntDesign,
  ButtonSwitch,
  Carousel,
  LikeSlideContainer,
  Modal,
  MovieInfo,
  NavigationHeader,
  OutScreen,
  RoundShadow,
  Screen,
  Space,
  Text,
  YoutubePlayer,
} from "../../../components"
//## types
import {
  FontWeight,
  Movie,
  MovieTrailerResponse,
  Trailer,
} from "../../../utils/types"
import { ScreenRouteProp } from "../../../utils/types/navigationTypes"
import { general } from "../../../utils"
//## Hooks
import useMovies from "../../../hooks/useMovies"
import useSeries from "../../../hooks/useSeries"
import { POSTER_IMAGE } from "../../../utils/config"

const InformationMangaDetails = ({
  details,
  handlePress,
}: {
  details: Movie
  handlePress: () => void
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            fontSize={general.text.heading + 1}
            fontWeight={FontWeight.Medium}
          >
            {details.title || (details as unknown as { name: string }).name}
          </Text>
          <Space height={18} />
          <Text
            fontSize={general.text.text - 2}
            fontWeight={FontWeight.Regular}
            style={{
              letterSpacing: -0.2,
            }}
          ></Text>
        </View>
        <View
          style={{
            backgroundColor: "#FA6A76",
            justifyContent: "center",
            alignItems: "center",
            height: 45,
            width: 45,
            borderRadius: 25,
          }}
        >
          <RoundShadow size={25} color="#FA6A76" />
          <AntDesign name="heart" size={19} color="white" />
        </View>
      </View>
      <Space height={25} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 25,
          margin: 0,
        }}
      >
        <MovieInfo label="Rating" info={details.vote_average.toString()} />
        <MovieInfo
          label="Language"
          info={details.original_language.toUpperCase()}
        />
      </View>
      <Space height={30} />
      <Text
        fontSize={general.text.text - 1}
        fontWeight={FontWeight.Regular}
        style={{
          lineHeight: 18,
        }}
        numberOfLines={4}
      >
        {details.overview}
      </Text>
      <Space height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginLeft: 5,
            }}
          >
            <Text fontSize={general.text.text - 2}>Author</Text>
            <Space height={2} />
            <Text
              fontSize={general.text.text - 3}
              fontWeight={FontWeight.Medium}
            >
              By Author
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 138,
            paddingVertical: 15,
            backgroundColor: "#424F56",
            borderRadius: 20,
          }}
          onPress={() => handlePress()}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Watch Trailer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const MSDetailScreen = () => {
  const [switchValue, setSwitchValue] = useState("information")
  const route = useRoute<ScreenRouteProp<"MSDetail">>()
  const [loading, setLoading] = useState(true)
  const [details, setDetails] = useState<Movie>()
  const [trailer, setTrailer] = useState<Trailer>()
  const [playing, setPlaying] = useState(false)

  const movies = useMovies()
  const series = useSeries()
  useEffect(() => {
    const getDetails = async () => {
      const id = route.params?.id
      const data = isMovie
        ? await movies.getMovies(`/movie/${id}`)
        : await series.getSeries(`/tv/${id}`)
      if (data !== undefined) setDetails(data as Movie)
      const video = isMovie
        ? ((await movies.getMovies(
            `/movie/${id}/videos?language=en-US`
          )) as MovieTrailerResponse)
        : ((await series.getSeries(
            `/tv/${id}/videos?language=en-US`
          )) as MovieTrailerResponse)

      const trailer = video.results.filter(
        (tv) => tv.site.toLowerCase() === "youtube" || tv.name.includes("of")
      )
      if (video !== undefined) setTrailer(trailer[0])
      setLoading(false)
    }

    getDetails()
  }, [route.params?.id])
  const DATA = [
    {
      image: `${POSTER_IMAGE}${details?.poster_path}`,
    },
  ]

  const isMovie = route.params?.movie

  // const { id = 1 } = route.params
  return (
    <Screen>
      <NavigationHeader
        title={isMovie ? "Movie Detail" : "Series Detail"}
        icon="sharealt"
        onPress={() => console.log("header Menu Pressed")}
      />

      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <View
            style={{
              marginHorizontal: -22,
            }}
          >
            <Space height={42} />
            <Carousel
              DATA={[...DATA, ...DATA, ...DATA] as [{ image: string }]}
            />
            <Space height={20} />
          </View>
          <OutScreen>
            <LikeSlideContainer>
              <Space height={18} />
              <View>
                {!isMovie && (
                  <>
                    <ButtonSwitch
                      switchValue={switchValue}
                      setSwitchValue={setSwitchValue}
                    />
                    <Space height={35} />
                  </>
                )}
                {switchValue === "information"
                  ? details && (
                      <InformationMangaDetails
                        handlePress={() => setPlaying(true)}
                        details={details}
                      />
                    )
                  : null}
              </View>
            </LikeSlideContainer>

            <Modal
              visible={playing}
              type="Picker"
              onRequestClose={() => setPlaying(false)}
            >
              <YoutubePlayer height={300} play={true} videoId={trailer?.key} />
              <Text fontSize={21}>{trailer?.name}</Text>
            </Modal>
          </OutScreen>
        </>
      )}
    </Screen>
  )
}

export default MSDetailScreen
