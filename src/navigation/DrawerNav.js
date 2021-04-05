import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TodaySurvey from "../TodaySurvey";
import WelcomeScreen from "../WelcomeScreen";
import HomeRent from "../HomeRent";
import OTPScreen from "../OTPScreen";
import ChoosingScreen from "../ChoosingScreen";
import Articles from "../Articles";
import LoginScreen from "../LoginScreen";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Todays Survey" component={TodaySurvey} />
        <Drawer.Screen name="Otp" component={OTPScreen} />
        <Drawer.Screen name="Choose" component={ChoosingScreen} />
        <Drawer.Screen name="Articles" component={Articles} />
        <Drawer.Screen name="HomeRent" component={HomeRent} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
