import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../base/AppText";

// Lists the icon libraries that this card can use.
// This makes the component reusable for different instruction steps.
type IconLibrary = "Feather" | "MaterialIcons" | "Ionicons";

interface InstructionCardProps {

  // Optional icon library used for the instruction icon.
  // If none is provided, Feather is used by default.
  iconLibrary?: IconLibrary;

  // Name of the icon displayed on the left side of the card.
  iconName:
    | React.ComponentProps<typeof Feather>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof Ionicons>["name"];

  // Instruction text displayed beside the icon.
  title: string;
}

// Stores the available icon libraries in one object.
// The selected library is chosen using the iconLibrary prop.
const iconLibraries = { Feather, MaterialIcons, Ionicons };

// InstructionCard is a reusable card component used to show one instruction step.
// It displays an icon on the left and the instruction text beside it.
export default function InstructionCard({
  iconLibrary = "Feather",
  iconName,
  title,
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

        {/* Displays the instruction text passed in through the title prop. */}
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
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

  // Styles the instruction text.
  // flex: 1 lets the text use the remaining space next to the icon.
  title: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
  },
});