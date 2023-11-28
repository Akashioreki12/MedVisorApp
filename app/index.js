import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
const doc = require("../app/assets/Images/doctora.png");
export default function Page() {
  return (
    <LinearGradient
      colors={["#242692", "#128AEA", "#050F27"]}
      style={{ flex: 1 }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => router.push("/slide1")}
      >
        <View
          style={{
            position: "absolute",
            width: "80%",
            height: "100%",
            top: 50,
            right: 0,
          }}
        >
          <Image
            resizeMode="contain"
            source={doc}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={{ marginLeft: "6%", marginTop: "16%" }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Future de{" "}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 6,
            }}
          >
            la Santé cérébrale{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 48, fontWeight: "bold" }}>
            MedVisor{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 18, opacity: 0.6 }}>
            Santé cérébrale prédite,
          </Text>
          <Text style={{ color: "white", fontSize: 18, opacity: 0.6 }}>
            avenir protégé.
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({});
