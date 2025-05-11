import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "HOME" }} />
      <Stack.Screen name="login" options={{ title: "LOGIN" }} />
      <Stack.Screen name="signup" options={{ title: "REGISTER" }} />
    </Stack>
  );
};

export default RootLayout;
