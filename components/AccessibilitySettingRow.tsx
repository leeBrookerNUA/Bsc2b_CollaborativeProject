import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Switch, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

interface AccessibilitySettingRowProps {
  iconType: "text" | "contrast" | "eye";
  title: string;
  type: "textSize" | "switch";
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  textSize?: number;
  onDecrease?: () => void;
  onIncrease?: () => void;
}

export default function AccessibilitySettingRow(props: AccessibilitySettingRowProps) {
  const {
    iconType,
    title,
    type,
    value = false,
    onValueChange,
    textSize = 12,
    onDecrease,
    onIncrease,
  } = props;

  return (
    <View style={styles.row}>
      <View style={styles.leftSide}>
        {iconType === "text" && <AppHeading style={styles.textIcon}>aA</AppHeading>}
        {iconType === "contrast" && <FontAwesome5 name="adjust" size={20} color="#FFFFFF" />}
        {iconType === "eye" && <FontAwesome name="eye" size={20} color="#FFFFFF" />}

        <AppText style={styles.title}>{title}</AppText>
      </View>

      {type === "textSize" && (
        <View style={styles.textSizeControls}>
          <Pressable onPress={onDecrease}>
            <AppHeading style={styles.controlButton}>−</AppHeading>
          </Pressable>

          <AppText style={styles.sizeNumber}>{textSize}</AppText>

          <Pressable onPress={onIncrease}>
            <AppHeading style={styles.controlButton}>+</AppHeading>
          </Pressable>
        </View>
      )}

      {type === "switch" && (
        <Switch
          value={value}
          onValueChange={onValueChange}
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
    flexShrink: 1,
  },

  textIcon: {
    fontSize: 18,
  },

  title: {
    fontSize: 16,
  },

  textSizeControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  controlButton: {
    fontSize: 24,
  },

  sizeNumber: {
    fontSize: 16,
    minWidth: 20,
    textAlign: "center",
  },
});