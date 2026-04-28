import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppSwitch from "./AppSwitch";
import AppText from "./AppText";

interface ConnectionSettingRowProps {
  iconName: React.ComponentProps<typeof FontAwesome>["name"];
  title: string;
  type: "status" | "switch";
  statusText?: string;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
}

export default function ConnectionSettingRow({
  iconName,
  title,
  type,
  statusText = "Searching",
  switchValue = false,
  onSwitchChange,
}: ConnectionSettingRowProps) {
  const handleSwitchChange = onSwitchChange ?? (() => {});

  return (
    <View style={styles.row}>
      <View style={styles.leftSide}>
        <FontAwesome name={iconName} size={22} color="#FFFFFF" />
        <AppText style={styles.title}>{title}</AppText>
      </View>

      {type === "status" ? (
        <View style={styles.statusBadge}>
          <AppText style={styles.statusText}>{statusText}</AppText>
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

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 99,
    backgroundColor: "#FF9F1C",
  },

  statusText: {
    fontSize: 11,
    textAlign: "center",
  },
});