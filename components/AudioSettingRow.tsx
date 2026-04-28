import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Switch, View } from "react-native";
import AppText from "./AppText";

interface AudioSettingRowProps {
  iconName: React.ComponentProps<typeof FontAwesome>["name"];
  title: string;
  type: "slider" | "switch";
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
}

export default function AudioSettingRow(props: AudioSettingRowProps) {
  const { iconName, title, type, switchValue = false, onSwitchChange } = props;

  return (
    <View style={styles.row}>
      <View style={styles.leftSide}>
        <FontAwesome name={iconName} size={22} color="#FFFFFF" />
        <AppText style={styles.title}>{title}</AppText>
      </View>

      {type === "slider" && (
        <View style={styles.sliderTrack}>
          <View style={styles.sliderFill} />
          <View style={styles.sliderThumb} />
        </View>
      )}

      {type === "switch" && (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{
            false: "rgba(255,255,255,0.25)",
            true: "#FFD60A",
          }}
          thumbColor="#FFFFFF"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 54,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  title: {
    fontSize: 16,
  },

  sliderTrack: {
    width: 96,
    height: 6,
    borderRadius: 99,
    backgroundColor: "rgba(255,255,255,0.35)",
    position: "relative",
  },

  sliderFill: {
    width: "70%",
    height: "100%",
    borderRadius: 99,
    backgroundColor: "#FFD60A",
  },

  sliderThumb: {
    position: "absolute",
    left: "68%",
    top: -5,
    width: 16,
    height: 16,
    borderRadius: 99,
    backgroundColor: "#FFFFFF",
  },
});