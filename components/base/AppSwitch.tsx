import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface AppSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export default function AppSwitch({ value, onValueChange }: AppSwitchProps) {
  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      hitSlop={6}
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      style={[styles.track, value && styles.trackOn]}
    >
      <View style={[styles.thumb, value && styles.thumbOn]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 46,
    height: 26,
    padding: 3,
    borderRadius: 13,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.28)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.16)",
  },

  trackOn: {
    backgroundColor: "#FFD60A",
  },

  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },

  thumbOn: {
    alignSelf: "flex-end",
  },
});