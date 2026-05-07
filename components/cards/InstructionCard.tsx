import { Feather, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

// Lists the icon libraries that this card can use.
// This makes the component reusable for different instruction steps.
type IconLibrary = "Feather" | "MaterialIcons" | "Ionicons" | "FontAwesome";

interface InstructionCardProps {

  // Optional number used to show the order of the instruction step.
  stepNumber?: number;

  // Optional icon library used for the instruction icon.
  // If none is provided, Feather is used by default.
  iconLibrary?: IconLibrary;

  // Name of the icon displayed on the left side of the card.
  iconName:
  | React.ComponentProps<typeof Feather>["name"]
  | React.ComponentProps<typeof MaterialIcons>["name"]
  | React.ComponentProps<typeof Ionicons>["name"]
  | React.ComponentProps<typeof FontAwesome>["name"];

  // Main instruction heading.
  title: string;

  // List of short instruction points shown below the title.
  items: readonly string[];
}

// Stores the available icon libraries in one object.
// The selected library is chosen using the iconLibrary prop.
const iconLibraries = { Feather, MaterialIcons, Ionicons, FontAwesome };

// Controls the size of the small numbered badge.
// Keeping this as a variable makes the badge easier to adjust.
const BADGE_SIZE = 20;

// InstructionCard is a reusable card component used to show one instruction step.
// It displays an icon on the left and the instruction text beside it.
export default function InstructionCard({
  stepNumber,
  iconLibrary = "Feather",
  iconName,
  title,
  items,
}: InstructionCardProps) {

  // Selects the correct icon component based on the iconLibrary prop.
  const Icon = iconLibraries[iconLibrary];

  return (
    <View style={styles.card}>
      <View style={styles.contentRow}>

        {/* Icon wrapper allows the number badge to sit on top of the icon circle. */}
        <View style={styles.iconWrapper}>

          {/* Circular icon container. It gives the icon a soft background so it stands out from the card. */}
          <View style={styles.iconContainer}>
            <Icon name={iconName as any} size={24} color="#FFFFFF" />
          </View>

          {/* Step number badge.*/}
          {stepNumber !== undefined && (
            <View style={styles.stepBadge}>
              <AppHeading style={styles.stepText}>{stepNumber}</AppHeading>
            </View>
          )}
        </View>

        {/* Text section contains the heading and each instruction item. */}
        <View style={styles.instructions}>
          <AppHeading style={styles.title}>{title}</AppHeading>

          {items.map((item, index) => (
            <View key={`${title}-${index}`} style={styles.bulletRow}>

              <AppText style={styles.bullet}>•</AppText>
              <AppText style={styles.itemText}>{item}</AppText>

            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main instruction card container.
  card: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.45)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.45)",
  },

  // Places the icon and instruction text in a horizontal row.
  // flex-start keeps longer instruction cards aligned neatly from the top.
  contentRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  // Wraps the icon and lets the badge be positioned relative to it.
  iconWrapper: {
    position: "relative",
    marginRight: 12,
  },

  // Circular background behind the instruction icon.
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.22)",
  },

  // Small numbered badge shown over the icon.
  // alignItems and justifyContent centre the number inside the circle.
  stepBadge: {
    position: "absolute",
    top: -7,
    left: -7,
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    overflow: "hidden",
  },

  // Number inside the badge. Solidifys that theres an order to follow as its for kids.
  stepText: {
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    fontSize: 12,
    lineHeight: BADGE_SIZE,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#7B4BD8",
    includeFontPadding: false,

    // Removes the default AppHeading shadow for the small badge number.
    textShadowColor: "transparent",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
  },

  // Allows the text section to take up the remaining space beside the icon.
  instructions: {
    flex: 1,
  },

  // Main heading for each instruction.
  // Slightly larger text makes the step title clear and easy for children to read.
  title: {
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 6,
  },

  // Places each bullet point and its text in a horizontal row.
  // flex-start keeps multi-line bullet points aligned neatly from the top.
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 2,
  },

  // Styles the bullet symbol shown before each instruction point.
  // The size and lineHeight are slightly larger so the bullet matches the body text.
  bullet: {
    fontSize: 16,
    lineHeight: 22,
    marginRight: 6,
    opacity: 0.9,
  },

  // Styles the supporting instruction text.
  // flex: 1 allows longer text to wrap properly within the card.
  itemText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 21,
    opacity: 0.95,
  },
});