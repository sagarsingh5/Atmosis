import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        {/* Blue circle */}
        <View
          style={{
            position: "absolute",
            height: 85,
            width: 85,
            borderRadius: 85 / 2,
            backgroundColor: "#5652E7",
            top: -50,
            right: 0,
          }}
        />
        {/* Yellow border Circle */}
        <View
          style={{
            position: "absolute",
            height: 100,
            width: 100,
            borderRadius: 100 / 2,
            borderColor: "#FFE45B",
            borderWidth: 3,
            top: 10,
            left: -50,
          }}
        />
        {/* {Image Container} */}
        <View style={{ height: 200, width: 200 }}>
          <Image style={styles.img} source={require("../assets/Welcome.png")} />
        </View>
      </View>
      {/* Bottom Container  */}
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* Bottom box  */}
        <View style={styles.lower}>
          {/* Large Text  */}
          <View style={{ alignItems: "center", margin: 15 }}>
            <Text style={styles.text}>Hello!</Text>
            <Text style={styles.text}>Let's help us to some</Text>
            <Text style={styles.text}>quick questions...</Text>
          </View>
          {/* Small Text */}
          <View style={{ alignItems: "center", margin: 20 }}>
            <Text style={[styles.text, { fontSize: 12 }]}>
              Help us with some couple of questions
            </Text>
            <Text style={[styles.text, { fontSize: 12 }]}>
              and earn points!
            </Text>
          </View>
          {/* Button */}
          <View style={styles.button}>
            <Text style={{ color: "#342068" }}>Start Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#351C56" },
  upper: {
    flex: 0.9,
    backgroundColor: "#fff",
    borderBottomRightRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  lower: {
    flex: 1,
    backgroundColor: "#351C56",
    borderTopLeftRadius: 100,
    alignItems: "center",
    padding: 30,
    paddingTop: 50,
  },
  button: {
    height: 40,
    width: "90%",
    borderRadius: 10,
    // justifyContent: "center",
    backgroundColor: "#FEDA24",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "800",
  },
  img: {
    height: "100%",
    width: "100%",
  },
});
