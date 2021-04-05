import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Cards({ topic }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "50%" }}>
          <View style={{ height: "80%" }}>
            <View style={styles.topic}>
              <Text style={styles.topicText}>{topic}</Text>
            </View>
            <Text style={{ fontSize: 12 }}>
              Dont forget these 5 things on social media{" "}
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={[styles.footerText, { fontWeight: "bold" }]}>
              Andy Wansum
            </Text>
            <Text style={styles.footerText}>4m ago</Text>
          </View>
        </View>
        <View style={styles.image}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../../assets/image.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    height: 150,
    // borderRadius: 30,
    paddingHorizontal: 25,
    justifyContent: "center",
    padding: 10,
  },
  topic: {
    backgroundColor: "#F1DDEC",
    padding: 7,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  topicText: {
    color: "#DAB0D3",
    fontSize: 10,
    textTransform: "uppercase",
  },
  image: {
    height: "100%",
    width: "35%",
    borderRadius: 20,
    overflow: "hidden",
  },
  footer: {
    flexDirection: "row",
    // justifyContent: "space-around",
  },
  footerText: {
    fontSize: 12,
    color: "#a9a9a9",
    marginRight: 15,
  },
});
