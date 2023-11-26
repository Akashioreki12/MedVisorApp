import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import logo from "../../assets/logo.jpeg";
import doc1 from "../../assets/doc2.png";
import Backball from "../../components/backball2";
import Silder from "../../components/sliderIcon2";
import { router } from "expo-router";

const slide2 = () => {
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
          Prévention Simplifiée
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
          Explorez la prévention des AVC en quelques étapes simples. Votre
          bien-être, notre priorité.
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
          onPress={() => router.replace("/slide3")}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "normal" }}>
            Suivant
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default slide2;
