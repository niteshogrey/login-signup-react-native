import { View, ImageBackground, StyleSheet } from "react-native";

const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/background.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // optional dark overlay
    padding: 20,
  },
});

export default Background;
