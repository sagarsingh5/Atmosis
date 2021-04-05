import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import CardFlatList from "./components/CardFlatList";

export default function ChoosingScreen({ navigation }) {
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
  const [selected, setSelected] = useState("Sceince");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
          <MaterialCommunityIcons name="menu" size={24} color="#000" />
        </TouchableHighlight>
        <View style={styles.Dp}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../assets/image.jpg")}
          />
        </View>
      </View>
      <View style={styles.body}>
        <Text>Hi, Mario Speedwagon</Text>
        <Text style={{ marginVertical: 10, fontSize: 20 }}>
          Choose What You Like!!!
        </Text>
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
              backgroundColor: "cyan",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="search1" size={25} color="#fff" />
          </TouchableHighlight>
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
                      selected === item.title ? "#FAEEF0" : "transparent",
                    // borderColor: selected === item.title ? "yellow" : "#fff",
                  },
                ]}
              >
                <Text
                  style={{
                    color: selected === item.title ? "#ff0000" : "#000",
                  }}
                >
                  {item.title}
                </Text>
              </TouchableHighlight>
            )}
          />
        </View>

        {/* <View>
          <CardFlatList />
          <CardFlatList />
        </View> */}
        <FlatList
          data={blocks}
          keyExtractor={(data) => data.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({}) => <CardFlatList />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
    borderRadius: 5,
    overflow: "hidden",
    // backgroundColor: "red",
  },
  body: {
    flex: 1,
    backgroundColor: "#F6F7F9",
    // borderTopRightRadius: 100,
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    padding: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
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
    // borderWidth: 1,
    height: 30,
    margin: 13,
    paddingHorizontal: 10,
    // borderRadius: 30 / 2,
    alignItems: "center",
    // borderColor: "#fff",
  },
});
