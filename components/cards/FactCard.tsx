import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

// Lists the icon libraries that this card can use.
// This makes the component flexible because different facts can use different icon styles.
type IconLibrary =
  | "FontAwesome5"
  | "AntDesign"
  | "MaterialIcons"
  | "MaterialCommunityIcons"
  | "Feather";

interface FactCardProps {
  // Optional icon library used for the fact icon.
  // If none is provided, FontAwesome5 is used by default.
  iconLibrary?: IconLibrary;

  // Name of the icon displayed at the top of the card.
  // It accepts icon names from all the supported icon libraries.
  iconName:
    | React.ComponentProps<typeof FontAwesome5>["name"]
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"]
    | React.ComponentProps<typeof Feather>["name"];

  // Main fact title displayed on the card.
  title: string;

  // Extra text that explains the fact in more detail.
  subText: string;

  // Optional gradient colours for the card background.
  // This allows each fact category to have its own colour theme.
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

// Stores the available icon libraries in one object.
// The selected library is chosen using the iconLibrary prop.
const iconLibraries = {
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
};

// FactCard is a reusable card component used to display one fun fact.
// It shows an icon, title, description text, and a colourful gradient background.
export default function FactCard({
  iconLibrary = "FontAwesome5",
  iconName,
  title,
  subText,
  gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
}: FactCardProps) {
  // Selects the correct icon component based on the iconLibrary prop.
  const Icon = iconLibraries[iconLibrary];

  return (
    <LinearGradient colors={gradientColors} style={styles.card}>
      {/*
        Overlay adds a slight dark layer on top of the gradient.
        This helps the white text and icon stand out clearly.
      */}
      <View pointerEvents="none" style={styles.overlay} />

      {/*
        Content container keeps the icon, title, and fact text
        centred inside the card.
      */}
      <View style={styles.content}>
        {/*
          Circular icon container.
          It gives the icon a soft background so it stands out from the gradient.
        */}
        <View style={styles.iconContainer}>
          <Icon name={iconName as any} size={34} color="#FFFFFF" />
        </View>

        {/* Displays the main fact title using the reusable heading style. */}
        <AppHeading style={styles.title}>{title}</AppHeading>

        {/* Displays the extra information for the fact. */}
        <AppText style={styles.subText}>{subText}</AppText>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // Main fact card container.
  // The gradient background, rounded corners, and border match the app's card style.
  card: {
    width: "100%",
    minHeight: 220,
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  // Adds a subtle dark overlay over the gradient for better contrast.
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  // Centres all the content inside the card.
  content: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  // Circular background behind the icon.
  // Equal width and height with borderRadius creates the circle shape.
  iconContainer: {
    width: 60,
    height: 60,
    marginBottom: 8,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },

  // Styles the fact title and keeps it centred.
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },

  // Styles the fact description text.
  // lineHeight improves readability when the text wraps onto multiple lines.
  subText: {
    fontSize: 20,
    lineHeight: 25,
    textAlign: "center",
  },
});