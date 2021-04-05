import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
export default function WavyHeader({
  customStyles,
  customHeight,
  customTop,
  customBgColor,
  customWavePattern,
}) {
  return (
    <View style={customStyles}>
      <View style={{ backgroundColor: customBgColor, height: customHeight }}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: customTop }}
        >
          <Path fill={customBgColor} d={customWavePattern} />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});