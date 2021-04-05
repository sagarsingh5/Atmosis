import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function MiniCards({ image, title, points }) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={{ height: "100%", width: "100%" }} source={image} />
      </View>
      <View
        style={{
          width: "85%",
          padding: 5,
          //   backgroundColor: "yellow",
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 7,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
          <Text style={{ color: "#a9a9a9" }}>{points} Points</Text>
        </View>
        <View
          style={{
            height: 3,
            width: "100%",
            backgroundColor: "#F6F7F9",
            borderRadius: 1,
          }}
        >
          <View
            style={{
              height: "100%",
              width: `${points}%`,
              backgroundColor: "#000",
              borderRadius: 1,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
    elevation: 5,
  },
  image: { height: 40, width: 40 },
});
