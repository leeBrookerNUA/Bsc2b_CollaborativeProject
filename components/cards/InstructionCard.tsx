import { Feather, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

// Lists the icon libraries that this card can use.
// This makes the component reusable for different instruction steps.
type IconLibrary = "Feather" | "MaterialIcons" | "Ionicons" | "FontAwesome";

interface InstructionCardProps {

  // Optional icon library used for the instruction icon.
  // If none is provided, Feather is used by default.
  iconLibrary?: IconLibrary;

  // Name of the icon displayed on the left side of the card.
  iconName:
  | React.ComponentProps<typeof Feather>["name"]
  | React.ComponentProps<typeof MaterialIcons>["name"]
  | React.ComponentProps<typeof Ionicons>["name"]
  | React.ComponentProps<typeof FontAwesome>["name"];

  // Instruction text displayed beside the icon.
  title: string;

  // Instruction text displayed below title.
  subTitle: string;
}

// Stores the available icon libraries in one object.
// The selected library is chosen using the iconLibrary prop.
const iconLibraries = { Feather, MaterialIcons, Ionicons, FontAwesome };

// InstructionCard is a reusable card component used to show one instruction step.
// It displays an icon on the left and the instruction text beside it.
export default function InstructionCard({
  iconLibrary = "Feather",
  iconName,
  title,
  subTitle,
}: InstructionCardProps) {

  // Selects the correct icon component based on the iconLibrary prop.
  const Icon = iconLibraries[iconLibrary];

  return (
    <View style={styles.card}>

      {/* Row container places the icon and instruction text side by side. */}
      <View style={styles.contentRow}>

        {/*  Circular icon container. It gives the icon a soft background so it stands out from the card. */}
        <View style={styles.iconContainer}>
          <Icon name={iconName as any} size={24} color="#FFFFFF" />
        </View>
        <View style={styles.instructions}>
        {/* Displays the instruction text passed in through the title prop. */}
        <AppHeading style={styles.title}>{title}</AppHeading>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
    </View >
  );
}

const styles = StyleSheet.create({

  // Main instruction card container.
  // The rounded corners, border, and transparent background match the soft glass style used throughout the app.
  card: {
    width: "100%",
    minHeight: 52,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.14)",
  },

  // Places the icon and instruction text in a horizontal row.
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  // Circular background behind the instruction icon.
  // Equal width and height with borderRadius creates the circle shape.
  iconContainer: {
    width: 32,
    height: 32,
    marginRight: 8,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },

  instructions: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },

  // Styles the instruction text.
  // flex: 1 lets the text use the remaining space next to the icon.
  title: {
    flex: 1,
    fontSize: 16,
    lineHeight: 18,
  },

  // Styles the supporting text below the heading.
  // opacity makes it slightly softer than the main title.
  subTitle: {
    fontSize: 12,
    marginBottom: 6,
    opacity: 0.8,
    textAlign: "left",
  },
});