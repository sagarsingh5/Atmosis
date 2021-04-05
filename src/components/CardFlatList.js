import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CardFlatList() {
  const blocks = [
    {
      id: 1,
      title: "Sceince",
    },
    {
      id: 2,
      title: "Travel",
    },
    {
      id: 3,
      title: "Tech",
    },
    {
      id: 4,
      title: "Gaming",
    },
    {
      id: 5,
      title: "Gamings",
    },
  ];
  const [selected, setSelected] = useState();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text>Fashion(1568 Photos)</Text>
        <Text style={{ color: "#a9a9a9" }}>Show All</Text>
      </View>
      <FlatList
        data={blocks}
        horizontal
        keyExtractor={(data) => data.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <ImageBackground
              style={{ height: "100%", width: "100%" }}
              //   source={require("../../assets/image.jpg")}
            >
              <View style={{ flexDirection: "row", padding: 5 }}>
                <View style={styles.Dp}>
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../../assets/image.jpg")}
                  />
                </View>
                <View style={{ paddingHorizontal: 5 }}>
                  <Text style={{ fontSize: 12, color: "#fff" }}>
                    {item.title}
                  </Text>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={10}
                    color="black"
                  />
                </View>
              </View>
              <TouchableHighlight
                onPress={() => setSelected(item.title)}
                style={{
                  backgroundColor: item.title === selected ? "blue" : "red",
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "#fff", fontSize: 12 }}>Follow</Text>
              </TouchableHighlight>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  box: {
    height: 120,
    width: 120,
    margin: 10,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "yellow",
  },
  Dp: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    overflow: "hidden",
    // backgroundColor: "red",
  },
});
