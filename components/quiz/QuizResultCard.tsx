import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

// Lists the icon libraries that this result card can use.
// This makes the component reusable for both pass and fail quiz screens.
type IconLibrary = "FontAwesome" | "AntDesign" | "MaterialCommunityIcons";

interface QuizResultCardProps {
  // Optional icon library used for the result icons.
  // If none is provided, FontAwesome is used by default.
  iconLibrary?: IconLibrary;

  iconName1:
    | React.ComponentProps<typeof FontAwesome>["name"]
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];

  iconName2?:
    | React.ComponentProps<typeof FontAwesome>["name"]
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];

  // Number of extra icons to display if iconName2 is provided.
  iconCount?: number;

  // Main result heading displayed on the card.
  title: string;

  // Supporting result message shown underneath the title.
  subTitle: string;

  // Extra result text shown below the subtitle.
  subText: string;

  // Optional gradient colours for the result card background.
  // This allows pass and fail cards to use different colour themes.
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

// Stores the available icon libraries in one object.
// The selected library is chosen using the iconLibrary prop.
const iconLibraries = {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
};

// QuizResultCard is a reusable card component used after a quiz is completed.
// It displays a result icon, feedback text, and optional reward icons.
export default function QuizResultCard({
  iconLibrary = "FontAwesome",
  iconName1,
  iconName2,
  iconCount = 1,
  title,
  subTitle,
  subText,
  gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
}: QuizResultCardProps) {

  // Selects the correct icon component based on the iconLibrary prop.
  const Icon = iconLibraries[iconLibrary];

  /* Creates an array used to render the optional extra icons. Math.max prevents a negative iconCount from creating an invalid array length. */
  const extraIcons = Array.from({ length: Math.max(0, iconCount) });

  return (
    <View style={styles.card}>

      {/* LinearGradient creates the colourful background for the result card. The gradient colours can be changed depending on the quiz result. */}
      <LinearGradient colors={gradientColors} style={styles.gradient} />

      {/* Overlay adds a subtle dark layer over the gradient This helps the white text and icons stand out more clearly. */}
      <View pointerEvents="none" style={styles.overlay} />

      {/* Content container keeps the icon, text, and optional reward icons centred above the background layers. */}
      <View style={styles.content}>

        {/* Circular icon container for the main result icon. This makes the result icon stand out from the card background. */}
        <View style={styles.iconContainer}>
          <Icon name={iconName1 as any} size={32} color="#FFFFFF" />
        </View>

        {/* Displays the main result title using the reusable heading style. */}
        <AppHeading style={styles.title}>{title}</AppHeading>

        {/* Displays the supporting result message. */}
        <AppText style={styles.subTitle}>{subTitle}</AppText>

        {/* Displays extra feedback text underneath the subtitle. */}
        <AppText style={styles.subText}>{subText}</AppText>

        {/* Optional icon row. This only appears when iconName2 is provided and iconCount is greater than 0. */}
        {iconName2 && extraIcons.length > 0 && (
          <View style={styles.iconRow}>
            {extraIcons.map((_, index) => (
              <Icon
                key={`${iconName2}-${index}`}
                name={iconName2 as any}
                size={28}
                color="#FFFFFF"
              />

            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  // Main result card container.
  // The rounded corners, border, and hidden overflow match the app's card style.
  card: {
    width: "100%",
    minHeight: 210,
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  // Makes the gradient fill the whole card.
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },

  // Adds a soft dark overlay over the gradient for better contrast.
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },

  // Holds all visible card content.
  // Padding keeps the text and icons away from the card edges.
  content: {
    width: "100%",
    paddingHorizontal: 22,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  // Circular background behind the main result icon.
  // Equal width and height with borderRadius creates the circle shape.
  iconContainer: {
    width: 58,
    height: 58,
    marginBottom: 10,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
  },

  // Styles the main result heading.
  title: {
    fontSize: 25,
    marginBottom: 6,
    textAlign: "center",
  },

  // Styles the supporting result message.
  subTitle: {
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 2,
    textAlign: "center",
  },

  // Styles the smaller result feedback text.
  // The opacity keeps it slightly softer than the main heading.
  subText: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.95,
    textAlign: "center",
  },

  // Places optional reward icons, such as stars, in a centred row.
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 10,
  },
});