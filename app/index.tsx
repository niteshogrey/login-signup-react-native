import { Text, View } from "react-native";
import React from "react";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import Background from "./background";

const Index = () => {
  const router = useRouter();

  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 64 }}>Let's start</Text>
        <Text style={{ color: "white", fontSize: 64, marginBottom: 30 }}>
          React Native
        </Text>
        <MyButton
          title={"Login"}
          backgroundColor={"blue"}
          onPress={() => router.navigate("/login")}
        />
        <MyButton
          title={"Register"}
          backgroundColor={"green"}
          onPress={() => router.navigate("/signup")}
        />
      </View>
    </Background>
  );
};

export default Index;
