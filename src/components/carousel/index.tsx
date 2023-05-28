import React, { useState } from "react"
import { Animated, FlatList } from "react-native"
import { Item } from "./carouselItem"
import { CARD_LENGTH, SPACING } from "../../utils"
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export const Carousel = ({
  DATA,
}: {
  DATA: [
    {
      image: string
    }
  ]
}) => {
  const [scrollX, setScrollX] = useState(0)

  return (
    <Animated.View>
      <AnimatedFlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + SPACING * 1.5}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={"start"}
        data={DATA}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <Item
              key={index}
              image={(item as (typeof DATA)[0]).image}
              index={index}
              scrollX={scrollX}
            />
          )
        }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        keyExtractor={(item) => (item as { id: string; title: string }).id}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x)
        }}
      />
    </Animated.View>
  )
}

export default Carousel
