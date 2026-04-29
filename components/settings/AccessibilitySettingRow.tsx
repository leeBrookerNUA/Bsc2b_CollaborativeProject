import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppSwitch from "../base/AppSwitch";
import AppText from "../base/AppText";

// Lists the icon types this accessibility row can display.
// Each type is matched to a different icon inside renderIcon.
type IconType = "text" | "contrast" | "eye";

interface AccessibilitySettingRowProps {
  // Controls which icon is shown on the left side of the row.
  iconType: IconType;

  // Text label for the setting.
  title: string;

  // Controls what kind of setting row is shown.
  // textSize shows plus and minus buttons, while switch shows an AppSwitch.
  type: "textSize" | "switch";

  // Current switch value when the row is being used as a switch.
  value?: boolean;

  // Current text size value when the row is being used for text size controls.
  textSize?: number;

  // Function called when the switch value changes.
  onValueChange?: (value: boolean) => void;

  // Function called when the minus button is pressed.
  onDecrease?: () => void;

  // Function called when the plus button is pressed.
  onIncrease?: () => void;
}

// AccessibilitySettingRow is a reusable row component for accessibility settings.
// It can display either text size controls or an on/off switch depending on the type prop.
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
  // Provides a safe fallback function so AppSwitch always receives a function.
  const handleValueChange = onValueChange ?? (() => {});

  // Chooses the correct icon based on the iconType prop.
  // The text size option uses styled text, while the others use icon components.
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
      {/*
        Left side of the row.
        This contains the setting icon and the setting title.
      */}
      <View style={styles.leftSide}>
        {/* Holds the icon in a fixed-size space so all rows align neatly. */}
        <View style={styles.iconSlot}>{renderIcon()}</View>

        {/* Displays the setting name. */}
        <AppText style={styles.title}>{title}</AppText>
      </View>

      {type === "textSize" ? (
        <View style={styles.textSizeControls}>
          {/*
            Minus button used to decrease the text size.
            It is disabled if no onDecrease function is provided.
          */}
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

          {/* Shows the current text size value between the two controls. */}
          <AppText style={styles.sizeNumber}>{textSize}</AppText>

          {/*
            Plus button used to increase the text size.
            It is disabled if no onIncrease function is provided.
          */}
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
        // Switch control appears when the row type is switch.
        <AppSwitch value={value} onValueChange={handleValueChange} />
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

  // Fixed-size icon area.
  // This keeps all setting row titles aligned even when icons are different.
  iconSlot: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  // Styles the custom aA text icon used for the text size setting.
  textIcon: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
  },

  // Styles the setting title.
  // flexShrink allows longer titles to fit without pushing the control off screen.
  title: {
    flexShrink: 1,
    fontSize: 16,
  },

  // Holds the minus button, current size number, and plus button in a row.
  textSizeControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  // Styles the circular plus and minus buttons.
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

  // Style applied while a control button is being pressed.
  // The scale effect makes the button feel interactive.
  controlButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.95 }],
    backgroundColor: "rgba(255, 255, 255, 0.22)",
  },

  // Styles the number shown between the text size buttons.
  // minWidth keeps the controls from shifting as the number changes.
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