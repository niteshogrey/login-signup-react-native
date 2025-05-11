import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import MyButton from "@/components/MyButton";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passward: "",
    confirm_password: "",
  });

  useEffect(() => {
    console.log("calling..");
  }, []);

  const router = useRouter();
  const onRegister = () => {
    if (!formData.name.trim()) {
      return alert("Please provide a name");
    }
    if (!formData.email.trim()) {
      return alert("Please Provide an email");
    }
    if (!formData.passward.trim()) {
      return alert("Please Provide a valid password");
    }

    if (formData.passward !== formData.confirm_password) {
      return alert("Password is not matched");
    }
    console.log("Register from data:", formData);

    router.navigate("/login");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/register.jpg")}
        style={{
          width: "100%",
          height: 300,
        }}
      />
      <View style={styles.form}>
        <TextInput
          placeholder="Enter your full name"
          placeholderTextColor="#888"
          style={styles.input}
          onChangeText={(e) => setFormData((prev) => ({ ...prev, name: e }))}
        />
        <TextInput
          placeholder="Enter your Email"
          placeholderTextColor="#888"
          style={styles.input}
          onChangeText={(e) => setFormData((prev) => ({ ...prev, email: e }))}
        />
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#888"
          style={styles.input}
          onChangeText={(e) =>
            setFormData((prev) => ({ ...prev, passward: e }))
          }
        />
        <TextInput
          placeholder="Enter your confim password"
          placeholderTextColor="#888"
          style={styles.input}
          onChangeText={(e) =>
            setFormData((prev) => ({ ...prev, confirm_password: e }))
          }
        />
        <Text>
          I have an account.{" "}
          <Link
            style={{ color: "blue", textDecorationLine: "underline" }}
            href={"/login"}
          >
            Login
          </Link>
        </Text>
        <MyButton
          title={"Register"}
          backgroundColor={"green"}
          onPress={onRegister}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default Signup;
