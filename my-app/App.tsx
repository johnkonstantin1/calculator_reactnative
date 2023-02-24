import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { Context } from "./src/theme/Theme";
import { useState } from "react";
import { Colors } from "./src/styles/Colors";
import Button from "./src/components/ButtonsComponent";
import CalculatorKeyboard from "./src/components/Keyboard";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Context.Provider value={theme}>
      <SafeAreaView
        style={
          theme == "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <StatusBar style="auto" />
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme == "light" ? "dark" : "light")}
        />
        <CalculatorKeyboard />
      </SafeAreaView>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
