
import logo from "../../assets/logo.jpeg";
import * as React from "react";
import { Text, StatusBar, View, StyleSheet ,Image} from "react-native";
import Constants from "expo-constants";
import Donut from "../../components/donut";
import Bulls from "../../components/bulls";
import Wireframe from "../../components/wireframe";
import Risks from "../../components/risks";

const data = [
  {
    percentage: 50,
    color: "#147FDF",
    max: 100,
    radius: 100,
    strokeWidth: 20,
  },
];

export default function App() {
  return (
    <View>
      <View className=" w-full h-[7%] items-center justify-center">
        <Image
          resizeMode="contain"
          source={logo}
          className=" w-[85%] h-[80%]  "
        />
      </View>
      <View className=" w-full h-[50%] items-center justify-center">
        <View className="items-center justify-center w-[70%] absolute">
          <Bulls />
        </View>

        <View className="items-center justify-center w-[70%] absolute">
          <Wireframe />
        </View>

        {data.map((p, i) => {
          return (
            <Donut
              key={i}
              percentage={p.percentage}
              color={p.color}
              delay={500 + 100 * i}
              max={p.max}
              radius={p.radius}
              strokeWidth={p.strokeWidth}
            />
          );
        })}
      </View>
      <View className=" flex flex-col w-full h-[43%] items-center justify-center p-[6%]">
        <Text
          className="text-black text-center
text-opacity-70
text-xl
font-medium"
        >
          Based on your provided information, our assessment indicates that you
          are at :
        </Text>
        <View className="w-[80%] h-[34%] my-[3%]">
          <Risks />
        </View>
        <Text
          className="text-blue-500
text-opacity-90
text-sm
font-normal"
        >
          Ps : This model isn't a replacement for a doctor. Consult a healthcare
          professional for a thorough evaluation.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
