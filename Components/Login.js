import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Enter the Username"}
        style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
      />

      <TextInput
        placeholder={"Enter the password"}
        style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          height: 42,
          width: "70 %",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          backgroundColor: "black",
          marginTop: "4%",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
