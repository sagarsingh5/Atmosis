import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function OTPScreen({ navigation }) {
  let textInput = useRef(null);
  const lengthInput = 6;
  const [intervalVal, setIntervalVal] = useState("");

  const onChangeText = (val) => {
    setIntervalVal(val);
  };

  useEffect(() => {
    textInput.focus();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("../assets/image.jpg")}
      >
        <LinearGradient
          colors={["transparent", "#fff", "white"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1.5 }}
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <View style={{ padding: 30 }}>
            <View
              style={{
                flexDirection: "row",
                // backgroundColor: "red",
              }}
            >
              <View style={{ width: "70%" }}>
                <Text>Verify Phone No.</Text>
                <Text style={{ fontSize: 12 }}>
                  A 6-digit code hasbeen sent to mobile number (change)
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.Dp}>
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../assets/image.jpg")}
                  />
                </View>
                <View style={styles.Dp}>
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../assets/image.jpg")}
                  />
                </View>
                <View style={styles.Dp}>
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../assets/image.jpg")}
                  />
                </View>
              </View>
            </View>
            <TextInput
              ref={(input) => (textInput = input)}
              onChangeText={onChangeText}
              style={{ height: 0, width: 0 }}
              value={intervalVal}
              maxLength={lengthInput}
              returnKeyType="done"
              keyboardType="numeric"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {Array(lengthInput)
                .fill()
                .map((data, index) => (
                  <TouchableHighlight
                    key={index}
                    style={styles.cellView}
                    onPress={() => {
                      textInput.focus();
                      // console.log("pressed");
                    }}
                  >
                    <Text style={styles.cellText}>
                      {intervalVal && intervalVal.length > 0
                        ? intervalVal[index]
                        : ""}
                    </Text>
                  </TouchableHighlight>
                ))}
            </View>
            <Text style={{ alignSelf: "flex-end", marginVertical: 10 }}>
              Expired in 9:05
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Don't recieve the code?</Text>
              <View
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: "red",
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={24}
                  color="#fff"
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  Dp: {
    height: 30,
    width: 30,
    borderRadius: 5,
    overflow: "hidden",
    margin: 5,
    marginTop: 10,
    // backgroundColor: "red",
  },
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    elevation: 5,
    backgroundColor: "#fff",
  },
  cellText: {
    textAlign: "center",
    fontSize: 16,
  },
});
