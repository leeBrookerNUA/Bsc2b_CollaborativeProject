import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppSwitch from "./AppSwitch";
import AppText from "./AppText";

type IconType = "text" | "contrast" | "eye";

interface AccessibilitySettingRowProps {
  iconType: IconType;
  title: string;
  type: "textSize" | "switch";
  value?: boolean;
  textSize?: number;
  onValueChange?: (value: boolean) => void;
  onDecrease?: () => void;
  onIncrease?: () => void;
}

export default function AccessibilitySettingRow({
  iconType,
  title,
  type,
  value = false,
  textSize = 12,
  onValueChange,
  onDecrease,
  onIncrease,
}: AccessibilitySettingRowProps) {
  const handleValueChange = onValueChange ?? (() => {});

  const renderIcon = () => {
    if (iconType === "text") {
      return <AppHeading style={styles.textIcon}>aA</AppHeading>;
    }

    if (iconType === "contrast") {
      return <FontAwesome5 name="adjust" size={20} color="#FFFFFF" />;
    }

    return <FontAwesome name="eye" size={20} color="#FFFFFF" />;
  };

  return (
    <View style={styles.row}>
      <View style={styles.leftSide}>
        <View style={styles.iconSlot}>{renderIcon()}</View>
        <AppText style={styles.title}>{title}</AppText>
      </View>

      {type === "textSize" ? (
        <View style={styles.textSizeControls}>
          <Pressable
            onPress={onDecrease}
            disabled={!onDecrease}
            hitSlop={8}
            style={({ pressed }) => [
              styles.controlButton,
              pressed && onDecrease && styles.controlButtonPressed,
            ]}
          >
            <FontAwesome name="minus" size={13} color="#FFFFFF" />
          </Pressable>

          <AppText style={styles.sizeNumber}>{textSize}</AppText>

          <Pressable
            onPress={onIncrease}
            disabled={!onIncrease}
            hitSlop={8}
            style={({ pressed }) => [
              styles.controlButton,
              pressed && onIncrease && styles.controlButtonPressed,
            ]}
          >
            <FontAwesome name="plus" size={13} color="#FFFFFF" />
          </Pressable>
        </View>
      ) : (
        <AppSwitch value={value} onValueChange={handleValueChange} />
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

  iconSlot: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  textIcon: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
  },

  title: {
    flexShrink: 1,
    fontSize: 16,
  },

  textSizeControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  controlButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.14)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },

  controlButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.95 }],
    backgroundColor: "rgba(255, 255, 255, 0.22)",
  },

  sizeNumber: {
    minWidth: 24,
    height: 28,
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
  },
});