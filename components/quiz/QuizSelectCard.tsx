import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, Pressable, StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

interface QuizSelectCardProps {
  iconName: React.ComponentProps<typeof AntDesign>["name"];

  // Number of icons to display.
  // This is used to show quiz difficulty, such as one star for easy or three stars for hard.
  iconCount?: number;

  // Main quiz difficulty title displayed on the card.
  title: string;

  // Supporting text shown underneath the title.
  subTitle: string;

  // Optional gradient colours for the card background.
  // This allows each quiz difficulty to have its own colour theme.
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  onQuizButtonPress?: () => void;
}

// QuizSelectCard is a reusable card component used on the quiz selection screen.
// It displays difficulty icons, a quiz title, supporting text, and a colourful background.
export default function QuizSelectCard({
  iconName,
  iconCount = 1,
  title,
  subTitle,
  gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
  onQuizButtonPress,
}: QuizSelectCardProps) {
  
  /* Creates an array used to render the number of icons needed. Math.max prevents a negative iconCount from creating an invalid array length. */
  const icons = Array.from({ length: Math.max(0, iconCount) });

  return (
    <Pressable

      // Runs the quiz selection function when the user taps the card.
      onPress={onQuizButtonPress}

      // Applies the normal card style and adds a pressed style while tapped.
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      {/* LinearGradient creates the colourful card background. The colours can be changed through the gradientColors prop. */}
      <LinearGradient colors={gradientColors} style={styles.gradient} />

      {/* Overlay adds a slight dark layer over the gradient. This helps the white icons and text stand out more clearly. */}
      <View pointerEvents="none" style={styles.overlay} />

      {/* Content container holds the icons, title, and subtitle above the background layers.*/}
      <View style={styles.content}>

        {/* Icon row displays one or more icons. Multiple icons are used to visually show the quiz difficulty level.*/}
        <View style={styles.iconRow}>
          {icons.map((_, index) => (
            <AntDesign
              key={`${iconName}-${index}`}
              name={iconName}
              size={32}
              color="#FFFFFF"
            />

          ))}
        </View>

        {/* Displays the quiz difficulty title using the reusable heading style. */}
        <AppHeading style={styles.title}>{title}</AppHeading>

        {/* Displays the short description for the quiz difficulty. */}
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  // Main quiz selection card.
  // The fixed height, rounded corners, and border create a large tappable card.
  card: {
    width: "100%",
    height: 140,
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  // Style applied while the card is being pressed.
  // The slight scale effect makes the card feel interactive.
  cardPressed: {
    opacity: 0.95,
    transform: [{ scale: 0.98 }],
  },

  // Makes the gradient fill the whole card.
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },

  // Adds a subtle dark overlay over the gradient for better text contrast.
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  // Positions the icons and text in the centre of the card.
  content: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  // Places the difficulty icons in a horizontal row.
  // The gap keeps equal spacing between each icon.
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginBottom: 6,
  },

  // Styles the main quiz difficulty title.
  title: {
    fontSize: 24,
    textAlign: "center",
  },

  // Styles the supporting quiz description text.
  // lineHeight improves readability if the text wraps.
  subTitle: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
});