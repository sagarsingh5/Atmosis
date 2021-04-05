import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import Cards from "./components/Cards";
import { block } from "react-native-reanimated";

export default function Articles({ navigation }) {
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
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={styles.header}>
          <TouchableHighlight
            style={[styles.iconbox, { backgroundColor: "#C5C8CD" }]}
            onPress={() => {}}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="#000" />
          </TouchableHighlight>
          <Text style={{ color: "#000", fontSize: 18 }}>Articles</Text>
          <TouchableHighlight
            style={styles.iconbox}
            onPress={() => navigation.toggleDrawer()}
          >
            <MaterialCommunityIcons name="menu" size={24} color="#000" />
          </TouchableHighlight>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Search by Video or Post"
            style={{ width: "85%" }}
          />
          <TouchableHighlight
            onPress={() => console.log("pressed")}
            style={{
              height: "100%",
              width: 35,
              // backgroundColor: "cyan",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="search1" size={25} color="#a9a9a9" />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.body}>
        <View style={[styles.header, { paddingHorizontal: 25 }]}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>For You</Text>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="appstore-o" size={24} color="#a9a9a9" />
            <MaterialCommunityIcons name="menu" size={24} color="#a9a9a9" />
          </View>
        </View>
        <FlatList
          data={blocks}
          keyExtractor={(data) => data.id.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{ height: 0.5, width: "100%", backgroundColor: "#a9a9a9" }}
            />
          )}
          renderItem={({ item }) => <Cards topic={item.title} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F6" },
  header: {
    height: 50,
    width: "100%",
    // backgroundColor: "#0fff",
    marginTop: 25,
    // paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    backgroundColor: "#C5C8CD",
    borderRadius: 10,
    flexDirection: "row",
    padding: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 10,
  },
  iconbox: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#a9a9a9",
    // height: 40,
    // width: 40,
    borderRadius: 10,
  },
  body: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 30,
    // paddingHorizontal: 25,
  },
});
