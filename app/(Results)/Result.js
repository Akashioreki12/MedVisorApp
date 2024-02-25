import logo from "../assets/Images/logo.jpeg";
import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Donut from "../Components/donut";
import Bulls from "../Components/bulls";
import Wireframe from "../Components/wireframe";
import Risks from "../Components/risks";
import { router } from "expo-router";

const data = [
  {
    percentage: 70,
    color: "#147FDF",
    max: 100,
    radius: 120,
    strokeWidth: 20,
  },
];

export default function App()
{

  
  

  const navigateToHome = () => {
    router.replace("/SurveyForm");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={navigateToHome}>
        <Text style={styles.backButtonText}>Refaire le Test</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image resizeMode="contain" source={logo} style={styles.logo} />
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.bullsContainer}>
          <Bulls />
        </View>

        <View style={styles.wireframeContainer}>
          <Wireframe />
        </View>

        {data.map((p, i) => (
          <Donut
            key={i}
            percentage={p.percentage}
            color={p.color}
            delay={500 + 100 * i}
            max={p.max}
            radius={p.radius}
            strokeWidth={p.strokeWidth}
          />
        ))}
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.risksText}>
          Selon les informations fournies, notre évaluation indique que vous
          êtes à :
        </Text>
        <View style={styles.risksContainer}>
          <Risks />
        </View>
        <Text style={styles.disclaimerText}>
          Remarque : Ce modèle n'est pas un substitut à un avis médical.
          Consultez un professionnel de la santé pour une évaluation
          approfondie.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "black",
    fontSize: 18,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "60%",
    height: "80%",
  },
  middleContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  bullsContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "70%",
  },
  wireframeContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "60%",
  },
  bottomContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: "6%",
  },
  risksText: {
    color: "gray",
    
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    opacity: 0.7,
    marginBottom: 10,
  },
  risksContainer: {
    width: "80%",
    height: "34%",
    marginVertical: "3%",
  },
  disclaimerText: {
    color: "#128AEA",
    fontSize: 14,
    textAlign: "center",
    opacity: 0.9,
    marginTop: 10,
  },
});
