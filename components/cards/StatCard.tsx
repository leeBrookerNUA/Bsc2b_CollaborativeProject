import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../base/AppText";

// Lists the icon libraries that this card can use.
// This makes the component reusable for different types of stats.
type IconLibrary = "AntDesign" | "MaterialIcons" | "Feather";

interface StatCardProps {
  // Optional icon library used for the stat icon.
  // If none is provided, AntDesign is used by default.
  iconLibrary?: IconLibrary;

  // Name of the icon displayed at the top of the card.
  // It accepts icon names from AntDesign, MaterialIcons, or Feather.
  iconName:
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof Feather>["name"];

  // Main stat value displayed on the card, such as "2" or "4.8W".
  value: string;

  // Label shown underneath the value, such as "hours" or "power".
  title: string;

  // Colour used for the icon itself.
  iconColor: string;

  // Optional background colour behind the icon.
  iconBgColor?: string;
}

// StatCard is a reusable card component used to display small pieces of data.
// It shows an icon, a main value, and a short label underneath.
export default function StatCard(props: StatCardProps) {
  const {
    iconLibrary = "AntDesign",
    iconName,
    value,
    title,
    iconColor,
    iconBgColor = "rgba(255, 255, 255, 0.55)",
  } = props;

  /*
    Selects the correct icon component based on the iconLibrary prop.
    If the library is not MaterialIcons or Feather, it uses AntDesign by default.
  */
  const Icon =
    iconLibrary === "MaterialIcons"
      ? MaterialIcons
      : iconLibrary === "Feather"
        ? Feather
        : AntDesign;

  return (
    <View style={styles.card}>
      {/*
        Circular icon container.
        The background colour can be customised using the iconBgColor prop.
      */}
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        <Icon name={iconName as any} size={22} color={iconColor} />
      </View>

      {/* Displays the main stat value. */}
      <AppText style={styles.value}>{value}</AppText>

      {/* Displays the label that explains what the value means. */}
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main stat card container.
  // flex: 1 allows multiple StatCards to share space evenly in a row.
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

  // Circular background behind the icon.
  // The high borderRadius keeps the container fully rounded.
  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  // Styles the main stat value.
  // The darker colour helps the value stand out clearly.
  value: {
    fontSize: 17,
    lineHeight: 21,
    color: "#1F2A44",
    marginBottom: 2,
    textAlign: "center",
  },

  // Styles the smaller label underneath the value.
  // The softer colour makes it secondary to the main value.
  title: {
    fontSize: 13,
    lineHeight: 16,
    color: "#5B6780",
    textAlign: "center",
  },
});