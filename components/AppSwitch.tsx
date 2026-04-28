import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface AppSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export default function AppSwitch(props: AppSwitchProps) {
  const { value, onValueChange } = props;

  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      style={[
        styles.track,
        value && styles.trackOn,
      ]}
    >
      <View
        style={[
          styles.thumb,
          value && styles.thumbOn,
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 46,
    height: 26,
    borderRadius: 99,
    backgroundColor: "rgba(255,255,255,0.28)",
    padding: 3,
    justifyContent: "center",
  },

  trackOn: {
    backgroundColor: "#FFD60A",
  },

  thumb: {
    width: 20,
    height: 20,
    borderRadius: 99,
    backgroundColor: "#FFFFFF",
  },

  thumbOn: {
    alignSelf: "flex-end",
  },
});