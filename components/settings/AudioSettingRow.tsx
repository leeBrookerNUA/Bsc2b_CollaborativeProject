import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppSwitch from "../base/AppSwitch";
import AppText from "../base/AppText";

interface AudioSettingRowProps {
  // Name of the FontAwesome icon shown on the left side of the row.
  iconName: React.ComponentProps<typeof FontAwesome>["name"];

  // Text label for the audio setting.
  title: string;

  // Controls which type of control is shown on the right side.
  // slider shows a visual volume slider, while switch shows an AppSwitch.
  type: "slider" | "switch";

  // Current value for the switch when the row is used as a switch.
  switchValue?: boolean;

  // Function called when the switch is turned on or off.
  onSwitchChange?: (value: boolean) => void;
}

// AudioSettingRow is a reusable row component for audio settings.
// It can display either a volume slider or an on/off switch depending on the type prop.
export default function AudioSettingRow({
  iconName,
  title,
  type,
  switchValue = false,
  onSwitchChange,
}: AudioSettingRowProps) {
  // Provides a safe fallback function so AppSwitch always receives a function.
  const handleSwitchChange = onSwitchChange ?? (() => {});

  return (
    <View style={styles.row}>
      {/*
        Left side of the row.
        This contains the audio icon and the setting title.
      */}
      <View style={styles.leftSide}>
        <FontAwesome name={iconName} size={22} color="#FFFFFF" />
        <AppText style={styles.title}>{title}</AppText>
      </View>

      {type === "slider" ? (
        <View style={styles.sliderTrack}>
          {/*
            Slider fill shows the current volume level visually.
            This is currently set as a static display rather than an interactive slider.
          */}
          <View style={styles.sliderFill} />

          {/*
            Slider thumb marks the current position on the volume track.
          */}
          <View style={styles.sliderThumb} />
        </View>
      ) : (
        // Switch control appears when the row type is switch.
        <AppSwitch value={switchValue} onValueChange={handleSwitchChange} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Main setting row container.
  // The row layout places the label on the left and the control on the right.
  row: {
    width: "100%",
    minHeight: 54,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.16)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },

  // Left section containing the icon and setting title.
  // flex: 1 lets it take the available space before the control.
  leftSide: {
    flex: 1,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  // Styles the setting title.
  // flexShrink allows longer titles to fit without pushing the control off screen.
  title: {
    flexShrink: 1,
    fontSize: 16,
  },

  // Background track for the volume slider.
  // The rounded shape gives it a soft pill-style appearance.
  sliderTrack: {
    width: 96,
    height: 6,
    borderRadius: 99,
    backgroundColor: "rgba(255, 255, 255, 0.35)",
  },

  // Filled part of the slider.
  // This shows the current volume level as 70%.
  sliderFill: {
    width: "70%",
    height: "100%",
    borderRadius: 99,
    backgroundColor: "#FFD60A",
  },

  // Circular slider thumb.
  // It is positioned near the end of the filled section to show the current level.
  sliderThumb: {
    position: "absolute",
    left: "68%",
    top: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
});