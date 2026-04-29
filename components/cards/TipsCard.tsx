import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../base/AppText";

// Lists the icon libraries that this card can use.
// This makes the component reusable for tips with different icon styles.
type IconLibrary = "AntDesign" | "MaterialIcons" | "MaterialCommunityIcons";

interface TipsCardProps {
  // Optional icon library used for the tip icon.
  // If none is provided, AntDesign is used by default.
  iconLibrary?: IconLibrary;
  iconName:
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];

  // Tip text displayed beside the icon.
  title: string;
}

// TipsCard is a reusable card component used to show one energy-saving tip.
// It displays a small icon and a short piece of advice.
export default function TipsCard(props: TipsCardProps) {
  const { iconLibrary = "AntDesign", iconName, title } = props;

  /* Selects the correct icon component based on the iconLibrary prop. If the library is not MaterialIcons or MaterialCommunityIcons, it uses AntDesign by default. */
  const Icon =
    iconLibrary === "MaterialIcons"
      ? MaterialIcons
      : iconLibrary === "MaterialCommunityIcons"
        ? MaterialCommunityIcons
        : AntDesign;

  return (
    <View style={styles.card}>

      {/* Row container places the icon and tip text side by side. */}
      <View style={styles.contentRow}>

        {/* Circular icon container. It gives the icon a soft background so it stands out from the card. */}
        <View style={styles.iconContainer}>
          <Icon name={iconName as any} size={20} color="#FFFFFF" style={styles.icon} />
        </View>

        {/* Displays the tip text passed in through the title prop. */}
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  // Main tip card container.
  // The rounded corners, border, and transparent background match the soft glass style used throughout the app.
  card: {
    width: "100%",
    minHeight: 46,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.12)",
    paddingVertical: 9,
    paddingHorizontal: 14,
    justifyContent: "center",
    overflow: "hidden",
  },

  // Places the icon and text in a horizontal row.
  contentRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  // Circular background behind the icon.
  // flexShrink: 0 keeps the icon from shrinking when the title text is longer.
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 99,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    flexShrink: 0,
  },

  // Keeps the icon centred inside its circular container.
  icon: {
    width: 24,
    height: 24,
    lineHeight: 24,
    textAlign: "center",
    textAlignVertical: "center",
  },

  // Styles the tip text.
  // flex: 1 allows the text to use the remaining space beside the icon.
  title: {
    flex: 1,
    flexShrink: 1,
    fontSize: 16,
    lineHeight: 20,
    textAlign: "left",
  },
});