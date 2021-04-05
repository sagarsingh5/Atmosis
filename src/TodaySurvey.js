import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MiniCards from "./MiniCards";

export default function TodaySurvey({ navigation }) {
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
  const cards = [
    {
      id: 1,
      title: "Food & Drink",
      image: require("../assets/image.jpg"),
      points: 60,
    },
    {
      id: 2,
      title: "Business",
      image: require("../assets/image.jpg"),
      points: 45,
    },
    {
      id: 3,
      title: "Health",
      image: require("../assets/image.jpg"),
      points: 80,
    },
  ];
  const [selected, setSelected] = useState("Sceince");
  const header = () => {
    return (
      <>
        <View style={styles.image}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../assets/image.jpg")}
          />
        </View>
        <Text style={{ fontSize: 20, marginVertical: 10, fontWeight: "500" }}>
          Survey Statistics
        </Text>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.purpleContainer}>
        <View style={styles.header}>
          <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
            <MaterialCommunityIcons name="menu" size={24} color="#fff" />
          </TouchableHighlight>
          <Text style={{ color: "#fff", fontSize: 18 }}>Todays Survey</Text>
          <View style={styles.Dp}>
            <Image
              style={{ height: "100%", width: "100%" }}
              source={require("../assets/image.jpg")}
            />
          </View>
        </View>
        <View style={styles.Hlist}>
          <FlatList
            data={blocks}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => setSelected(item.title)}
                style={[
                  styles.blocks,
                  {
                    backgroundColor:
                      selected === item.title ? "yellow" : "transparent",
                    borderColor: selected === item.title ? "yellow" : "#fff",
                  },
                ]}
              >
                <Text
                  style={{ color: selected === item.title ? "#000" : "#fff" }}
                >
                  {item.title}
                </Text>
              </TouchableHighlight>
            )}
          />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <FlatList
            data={cards}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={header}
            // scrollEnabled={false}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <MiniCards
                title={item.title}
                image={item.image}
                points={item.points}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F7F9" },
  purpleContainer: {
    flex: 0.28,
    backgroundColor: "#351C56",
    borderBottomLeftRadius: 100,
  },
  header: {
    height: 50,
    width: "100%",
    // backgroundColor: "#fff",
    marginTop: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Dp: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    overflow: "hidden",
    // backgroundColor: "red",
  },
  Hlist: {
    // backgroundColor: "red",
    height: 50,
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    marginLeft: 10,
  },
  blocks: {
    borderWidth: 1,
    height: 30,
    margin: 13,
    paddingHorizontal: 10,
    borderRadius: 30 / 2,
    alignItems: "center",
    borderColor: "#fff",
  },
  bodyContainer: {
    flex: 0.72,
    backgroundColor: "#351C56",
  },
  body: {
    flex: 1,
    backgroundColor: "#F6F7F9",
    borderTopRightRadius: 100,
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  image: {
    height: 250,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    overflow: "hidden",
    shadowColor: "#000",
    elevation: 10,
    resizeMode: "cover",
  },
});
