import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
const placeholder = require("@/assets/images/background-image.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeholder} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>

      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to about screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    padding: 5,
    borderRadius: 10,
    fontSize: 20,
    textDecorationLine: "underline",
    color: "red",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
