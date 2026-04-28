import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

type IconLibrary = "AntDesign" | "MaterialIcons" | "Feather";

interface StatCardProps {
  iconLibrary?: IconLibrary;
  iconName:
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof Feather>["name"];
  value: string;
  title: string;
  iconColor: string;
  iconBgColor?: string;
}

export default function StatCard(props: StatCardProps) {
  const {
    iconLibrary = "AntDesign",
    iconName,
    value,
    title,
    iconColor,
    iconBgColor = "rgba(255, 255, 255, 0.55)",
  } = props;

  const Icon =
    iconLibrary === "MaterialIcons"
      ? MaterialIcons
      : iconLibrary === "Feather"
        ? Feather
        : AntDesign;

  return (
    <View style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        <Icon name={iconName as any} size={22} color={iconColor} />
      </View>

      <AppText style={styles.value}>{value}</AppText>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 112,
    backgroundColor: "#EEF4FF",
    borderColor: "rgba(58, 134, 255, 0.5)",
    borderWidth: 3,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  value: {
    fontSize: 17,
    lineHeight: 21,
    color: "#1F2A44",
    marginBottom: 2,
    textAlign: "center",
  },

  title: {
    fontSize: 13,
    lineHeight: 16,
    color: "#5B6780",
    textAlign: "center",
  },
});