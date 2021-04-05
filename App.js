import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodaySurvey from "./src/TodaySurvey";
import DrawerNav from "./src/navigation/DrawerNav";

export default function App() {
  return <DrawerNav />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
