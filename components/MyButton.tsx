import { StyleSheet, Text, TouchableOpacity } from "react-native";

const MyButton = ({title, onPress, backgroundColor}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems:"center",
    marginVertical:10
  },
  text: { fontSize: 16, color: "white", fontWeight: "bold" },
});

export default MyButton;
