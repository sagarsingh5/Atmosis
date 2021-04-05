import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../assets/image.jpg")}
        />
        <View style={styles.addUser}>
          {/* <View style={{ flex: 1, backgroundColor: "red" }}> */}
          <AntDesign name="adduser" size={75} color="#000" />
          {/* </View> */}
        </View>
      </View>
      <View style={styles.body}>
        <View
          style={[
            styles.textInput,
            {
              padding: 0,
              paddingHorizontal: 0,
              marginVertical: 0,
              height: 60,
              borderRadius: 60 / 2,
              overflow: "hidden",
              backgroundColor: "#fff",
            },
          ]}
        >
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="adduser" size={20} color="#fff" />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ color: "blue", fontWeight: "bold" }}>
              Login as tenant
            </Text>
          </View>
          <View
            style={{ width: 1, height: "60%", backgroundColor: "#a9a9a9" }}
          />
          <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ color: "#000", fontWeight: "bold" }}>
              Login as Seller
            </Text>
          </View>
        </View>

        <Text style={{ fontSize: 20, marginVertical: 15 }}>Login</Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Email id or User name"
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
            <AntDesign name="mail" size={25} color="#a9a9a9" />
          </TouchableHighlight>
        </View>
        <View style={styles.textInput}>
          <TextInput placeholder="Password" style={{ width: "85%" }} />
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
            <AntDesign name="lock" size={25} color="#a9a9a9" />
          </TouchableHighlight>
        </View>
        <View
          style={[
            styles.textInput,
            {
              padding: 0,
              paddingHorizontal: 0,
              marginVertical: 0,
              height: 60,
              borderRadius: 60 / 2,
              overflow: "hidden",
              backgroundColor: "#fcaaab",
              marginVertical: 10,
            },
          ]}
        >
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="arrow-top-left"
              size={20}
              color="#000"
            />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>LOGIN</Text>
          </View>
          <View style={{ width: 1, height: "60%", backgroundColor: "#fff" }} />
          <View
            style={{
              flex: 1,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 10 }}>
              New User
            </Text>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>SignIn?</Text>
          </View>
        </View>
        <Text style={{ alignSelf: "center", marginVertical: 10 }}>
          Forgot Password?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fcfcfc" },
  image: {
    flex: 0.3,
  },
  addUser: {
    position: "absolute",
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    bottom: -150 / 2,
    backgroundColor: "#FCFCFC",
    // zIndex: 10,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 0.7,
    padding: 20,
    // alignItems: "center",
    paddingTop: 80,
  },
  textInput: {
    backgroundColor: "#C5C8CD",
    borderRadius: 25,
    flexDirection: "row",
    padding: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 10,
    elevation: 5,
  },
});
