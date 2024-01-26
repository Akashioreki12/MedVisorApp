import React, { useRef } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import Slide1 from "./slide1"; 
import Slide2 from "./slide2"; 
import Slide3 from "./slide3"; 

const App = () => {
  const scrollViewRef = useRef();

  const handleScroll = (event) => {
    const currentPage = Math.round(
      event.nativeEvent.contentOffset.x / Dimensions.get("window").width
    );

    console.log("Current Page:", currentPage);
  };

  const scrollToPage = (pageNumber) => {
    scrollViewRef.current.scrollTo({
      animated: true,
      x: Dimensions.get("window").width * pageNumber,
      y: 0,
    });
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16} // Adjust this value as needed
    >
      <View style={{ width: Dimensions.get("window").width }}>
        <Slide1 />
      </View>
      <View style={{ width: Dimensions.get("window").width }}>
        <Slide2 />
      </View>
      <View style={{ width: Dimensions.get("window").width }}>
        <Slide3 />
      </View>
    </ScrollView>
  );
};

export default App;
