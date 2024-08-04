import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <Redirect href="/(tabs)/home" />
  );
}
//mongodb+srv://test:test@cluster0.yeol1vi.mongodb.net/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor:"black",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
