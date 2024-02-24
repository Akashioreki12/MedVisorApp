import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import logo from "../assets/Images/logo.jpeg";
import doc1 from "../assets/Images/doc3.png";
import Backball from "../Components/backball3";
import Silder from "../Components/sliderIcon3";
import { router } from "expo-router";
const slide3 = () => {
  return (
    <View className=" items-center justify-center  ">
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
          backgroundColor: "#ffffff",
          width: "100%",
          height: "40%",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: "40%",
          borderTopRightRadius: "40%",
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
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
          Détection Instantanée
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
          Répondez, découvrez, prévenez. Votre santé cérébrale en quelques
          clics.
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
          onPress={() => router.push("/SurveyForm")}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "normal" }}>
            Commencer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default slide3;
