import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppSwitch from "../base/AppSwitch";
import AppText from "../base/AppText";

interface AudioSettingRowProps {
  iconName: React.ComponentProps<typeof FontAwesome>["name"];
  title: string;
  type: "slider" | "switch";
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
}

export default function AudioSettingRow({
  iconName,
  title,
  type,
  switchValue = false,
  onSwitchChange,
}: AudioSettingRowProps) {
  const handleSwitchChange = onSwitchChange ?? (() => {});

  return (
    <View style={styles.row}>
      <View style={styles.leftSide}>
        <FontAwesome name={iconName} size={22} color="#FFFFFF" />
        <AppText style={styles.title}>{title}</AppText>
      </View>

      {type === "slider" ? (
        <View style={styles.sliderTrack}>
          <View style={styles.sliderFill} />
          <View style={styles.sliderThumb} />
        </View>
      ) : (
        <AppSwitch value={switchValue} onValueChange={handleSwitchChange} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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

  leftSide: {
    flex: 1,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  title: {
    flexShrink: 1,
    fontSize: 16,
  },

  sliderTrack: {
    width: 96,
    height: 6,
    borderRadius: 99,
    backgroundColor: "rgba(255, 255, 255, 0.35)",
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
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
});