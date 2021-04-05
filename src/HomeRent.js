import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import PropertyCards from "./components/PropertyCards";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeRent({ navigation }) {
  const B = (props) => (
    <Text style={{ fontWeight: "bold", fontSize: 18 }}>{props.children}</Text>
  );
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
      <View style={{ flexDirection: "row", marginTop: 25 }}>
        <View style={{ width: "80%" }}>
          <View style={styles.header}>
            <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
              <MaterialCommunityIcons name="menu" size={24} color="#000" />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
              <MaterialCommunityIcons name="bell" size={24} color="#000" />
            </TouchableHighlight>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <Text>1256 Results</Text>
            <Text>
              <B>Home Rent For</B> "4213 Park
            </Text>
            <Text>Boulevard United States</Text>
          </View>
        </View>
        <View style={styles.dpContainer}>
          <View
            style={{
              height: 100,
              width: 40,
              backgroundColor: "blue",
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <View style={styles.Dp}>
              <Image
                style={{ height: "100%", width: "100%" }}
                source={require("../assets/image.jpg")}
              />
            </View>
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 10 }}>
              2 days Left
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.header}>
        <Text>1256 Selected Results</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight style={styles.iconCover} onPress={() => {}}>
            <MaterialCommunityIcons name="menu" size={20} color="#000" />
          </TouchableHighlight>
          <TouchableHighlight style={styles.iconCover} onPress={() => {}}>
            <MaterialCommunityIcons name="bell" size={20} color="#000" />
          </TouchableHighlight>
        </View>
      </View>
      <FlatList
        data={blocks}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => <PropertyCards topic={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 50,
    width: "100%",
    // backgroundColor: "#fff",

    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Dp: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: "hidden",
    // backgroundColor: "red",
  },
  dpContainer: {
    flex: 1,
    // backgroundColor: "red",
    // justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  iconCover: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 25,
    width: 40,
    alignSelf: "flex-end",
    margin: 10,
    elevation: 10,
  },
});
