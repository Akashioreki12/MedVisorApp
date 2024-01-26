import { View, Text , Image , TouchableOpacity} from 'react-native'
import React from 'react'
import logo from '../assets/Images/logo.jpeg'
import doc1 from '../assets/Images/doc1.png'
import Backball from "../Components/backball1";
import Silder from "../Components/sliderIcon1";
import { router } from "expo-router";


const slide1 = () => {
  return (
    <View className=" items-center justify-center h-screen ">
      <View className=" w-full h-[7%] items-center justify-center">
        <Image
          resizeMode="contain"
          source={logo}
          className=" w-[85%] h-[80%]  "
        />
      </View>
      <View className=" w-full h-[53%] items-center justify-center">
        <View className=" w-[76%] ">
          <Backball />
        </View>

        <Image
          resizeMode="contain"
          source={doc1}
          className=" w-[100%] h-[120%] absolute  "
        />
      </View>
      <View
        style={{
          backgroundColor: "#ffffff", // Replace with your desired background color
          width: "100%",
          height: "40%",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: "40%",
          borderTopRightRadius: "40%",
          elevation: 5, // Add elevation for shadow
          shadowColor: "#000", // Shadow color
          shadowOffset: { width: 0, height: 2 }, // Shadow offset
          shadowOpacity: 0.5, // Shadow opacity
          shadowRadius: 5, // Shadow radius
        }}
      >
        <Text
          style={{
            width: "100%",
            height: "25%",
            color: "#1578DA",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "5%",
            paddingBottom: "1%",
          }}
        >
          Protection Personnalisée
        </Text>
        <Text
          style={{
            width: "100%",
            height: "35%",
            color: "#718096",
            fontSize: 16,
            textAlign: "center",
            paddingHorizontal: "10%",
            paddingTop: "2%",
            paddingBottom: "%5",
          }}
        >
          Bienvenue dans la prévention des AVC personnalisée. Partagez quelques
          détails pour une tranquillité d'esprit assurée.
        </Text>
        <View
          style={{
            width: "100%",
            height: "15%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Silder />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#1578DA", // Replace with your desired background color
            width: "76%",
            height: "16%",
            borderRadius: 45,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: "1%",
          }}
          onPress={() => router.replace("slide2")}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "normal" }}>
            Suivant
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default slide1