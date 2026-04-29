import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppSwitch from "../base/AppSwitch";
import AppText from "../base/AppText";

interface ConnectionSettingRowProps {
  // Name of the FontAwesome icon shown on the left side of the row.
  iconName: React.ComponentProps<typeof FontAwesome>["name"];

  // Text label for the connection setting.
  title: string;

  // Controls which type of control is shown on the right side.
  // status shows a text badge, while switch shows an AppSwitch.
  type: "status" | "switch";

  // Text displayed inside the status badge.
  // This is used for settings such as WiFi Status.
  statusText?: string;

  // Current value for the switch when the row is used as a switch.
  switchValue?: boolean;

  // Function called when the switch is turned on or off.
  onSwitchChange?: (value: boolean) => void;
}

// ConnectionSettingRow is a reusable row component for connection settings.
// It can display either a status badge or an on/off switch depending on the type prop.
export default function ConnectionSettingRow({
  iconName,
  title,
  type,
  statusText = "Searching",
  switchValue = false,
  onSwitchChange,
}: ConnectionSettingRowProps) {
  // Provides a safe fallback function so AppSwitch always receives a function.
  const handleSwitchChange = onSwitchChange ?? (() => {});

  return (
    <View style={styles.row}>
      {/*
        Left side of the row.
        This contains the connection icon and the setting title.
      */}
      <View style={styles.leftSide}>
        <FontAwesome name={iconName} size={22} color="#FFFFFF" />
        <AppText style={styles.title}>{title}</AppText>
      </View>

      {type === "status" ? (
        /*
          Status badge appears when the row type is status.
          It displays text such as "Searching" for WiFi connection state.
        */
        <View style={styles.statusBadge}>
          <AppText style={styles.statusText}>{statusText}</AppText>
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

  // Styles the rounded status badge shown on status rows.
  // The orange colour helps show that the connection is still searching or not final.
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 99,
    backgroundColor: "#FF9F1C",
  },

  // Styles the text inside the status badge.
  statusText: {
    fontSize: 11,
    textAlign: "center",
  },
});