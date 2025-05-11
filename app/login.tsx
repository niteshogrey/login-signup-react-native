import { Image, TextInput, View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MyButton from "@/components/MyButton";
import { Link, useRouter } from "expo-router";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    passward: "",
  });

  useEffect(() => {
    console.log("calling..");
  }, []);

  const router = useRouter();

  const onLogin = () => {
    if (!formData.email.trim()) {
        return alert("please Provide an email")
    }
    if (!formData.passward.trim()) {
        return alert("please Provide a valid password")
    }
    console.log("Login form data:", formData);
    router.navigate("/");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/login.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.form}>
        <TextInput
          placeholder="Enter your Email"
          style={styles.input}
          placeholderTextColor="#888"
          onChangeText={(e) => setFormData((prev) => ({ ...prev, email: e }))}
        />
        <TextInput
          placeholder="Enter your Password"
          style={styles.input}
          placeholderTextColor="#888"
          onChangeText={(e) =>
            setFormData((prev) => ({ ...prev, passward: e }))
          }
        />
        <Text>
          I havn't any account.{" "}
          <Link
            style={{ color: "blue", textDecorationLine: "underline" }}
            href={"/signup"}
          >
            Register
          </Link>{" "}
        </Text>
        <MyButton title="Login" backgroundColor={"blue"} onPress={onLogin} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  form: {
    padding: 20,
    gap: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});
