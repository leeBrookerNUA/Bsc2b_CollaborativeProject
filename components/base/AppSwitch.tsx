import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface AppSwitchProps {
  // Current switch value.
  // true means the switch is on, and false means it is off.
  value: boolean;

  // Function called when the switch is pressed.
  // It sends the new switch value back to the parent component.
  onValueChange: (value: boolean) => void;
}

// AppSwitch is a reusable custom switch component.
// It is used instead of the default switch so the app can keep
// a consistent visual style across all settings screens.
export default function AppSwitch({ value, onValueChange }: AppSwitchProps) {
  return (
    <Pressable
      // Toggles the switch by sending the opposite value to the parent component.
      onPress={() => onValueChange(!value)}

      // Makes the pressable area slightly larger, which improves usability.
      hitSlop={6}

      // Accessibility settings help screen readers understand this component as a switch.
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}

      // Applies the default track style, then adds the "on" style when value is true.
      style={[styles.track, value && styles.trackOn]}
    >
      {/*
        Switch thumb.
        It moves to the right when the switch is on.
      */}
      <View style={[styles.thumb, value && styles.thumbOn]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Main switch track.
  // This creates the rounded background that the thumb sits inside.
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

  // Track style used when the switch is turned on.
  // The yellow colour makes the active state stand out clearly.
  trackOn: {
    backgroundColor: "#FFD60A",
  },

  // Circular switch thumb.
  // Equal width and height with borderRadius makes it a circle.
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },

  // Moves the thumb to the right side of the track when the switch is on.
  thumbOn: {
    alignSelf: "flex-end",
  },
});