import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";

export default function PropertyCards({ topic }) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/image.jpg")}
        >
          <TouchableHighlight style={styles.iconCover}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={20}
              color="#fff"
            />
          </TouchableHighlight>
          <View style={styles.imageFooter}>
            <Entypo name="dots-three-horizontal" size={24} color="#fff" />
            <View style={{ flexDirection: "row" }}>
              <View
                style={[
                  styles.iconCover,
                  { width: 32, margin: 2, backgroundColor: "#fff" },
                ]}
              >
                <Ionicons name="call" size={12} color="#a9a9a9" />
              </View>
              <View
                style={[
                  styles.iconCover,
                  { width: 32, margin: 2, backgroundColor: "#fff" },
                ]}
              >
                <MaterialCommunityIcons
                  name="file-table-box-outline"
                  size={13}
                  color="#a9a9a9"
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <View>
          <Text>{topic}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>$ 500</Text>
          <Text>United States</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "red",
            marginTop: 40,
          }}
        >
          <View style={[styles.iconCover, { width: 30 }]}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={10}
              color="#a9a9a9"
            />
          </View>
          <Text>2</Text>
          <View style={[styles.iconCover, { width: 30 }]}>
            <Ionicons name="water" size={10} color="#a9a9a9" />
          </View>
          <Text></Text>
          <View style={[styles.iconCover, { width: 30 }]}>
            <Ionicons name="bicycle" size={10} color="#a9a9a9" />
          </View>
          <Text>1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    // backgroundColor: "red",
    width: "100%",
    marginHorizontal: 10,
    flexDirection: "row",
    margin: 15,
  },
  image: {
    height: "100%",
    width: "45%",
    borderRadius: 10,
    overflow: "hidden",
  },
  imageFooter: {
    // backgroundColor: "yellow",
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconCover: {
    padding: 10,
    backgroundColor: "rgba(0,0,0,.5)",
    borderRadius: 25,
    width: 40,
    alignSelf: "flex-end",
    margin: 10,
  },
  content: {
    flex: 1,
    // backgroundColor: "yellow",
    marginVertical: 10,
    padding: 10,
    // elevation: 10,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: "#a9a9a9",
  },
});
