import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, Pressable, StyleSheet, View } from "react-native";
import { playLoadedSound } from "../../audio/audio";
import AppHeading from "../base/AppHeading";

// Lists the icon libraries that this button can use. This makes the component reusable across different pages with different icon styles.
type IconLibrary = "FontAwesome" | "MaterialIcons" | "Ionicons";

interface MainButtonProps {

  // Optional icon library used for the button icon.
  // If none is provided, FontAwesome is used by default.
  iconLibrary?: IconLibrary;

  // Name of the icon displayed inside the button.
  iconName:
  | React.ComponentProps<typeof FontAwesome>["name"]
  | React.ComponentProps<typeof MaterialIcons>["name"]
  | React.ComponentProps<typeof Ionicons>["name"];

  // Text displayed underneath the icon.
  title: string;

  // Optional gradient colours for the button background.
  // This allows each button to have its own theme colour.
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];

  // Function called when the button is pressed. This is usually used to navigate to another page.
  onMainButtonPress?: () => void;
}

// Stores the available icon libraries in one object.
// The selected library is chosen using the iconLibrary prop.
const iconLibraries = {
  FontAwesome,
  MaterialIcons,
  Ionicons,
};

// MainButton is a reusable large button component.
// It is used on menu screens to show a colourful navigation button with an icon, title, gradient background, and pressed animation.
export default function MainButton({
  iconLibrary = "FontAwesome",
  iconName,
  title,
  gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
  onMainButtonPress,
}: MainButtonProps) {
  // Selects the correct icon component based on the iconLibrary prop.
  const Icon = iconLibraries[iconLibrary];

  return (
    <Pressable

      // Runs the button action and plays a sound effect when the user taps it.
      onPress={() => {
        playLoadedSound();
        onMainButtonPress?.();
      }}
      android_disableSound={true} // Disables the default Android button sound as we have our own custom button sound effect.

      // Disables the button if no press function has been provided.
      disabled={!onMainButtonPress}

      // Applies the normal card style and adds a pressed style while tapped.
      style={({ pressed }) => [
        styles.card,
        pressed && onMainButtonPress && styles.cardPressed,
      ]}
    >
      {/* LinearGradient creates the colourful background of the button. The colours can be changed through the gradientColors prop. */}
      <LinearGradient colors={gradientColors} style={styles.gradient} />

      {/* Overlay adds a slight dark layer on top of the gradient. This helps the white icon and text stand out more clearly. */}
      <View pointerEvents="none" style={styles.overlay} />

      {/* Content container holds the icon and title above the background layers. */}
      <View style={styles.content}>

        {/* Circular icon container. It gives the icon a soft background so it stands out from the gradient. */}
        <View style={styles.iconContainer}>
          <Icon name={iconName as any} size={38} color="#FFFFFF" />
        </View>

        {/* Displays the button title using the reusable heading style. */}
        <AppHeading style={styles.title}>{title}</AppHeading>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  // Main button card.
  // The fixed height, rounded corners, and border create a large tappable menu card.
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

  // Style applied while the button is being pressed.
  // The slight scale effect makes the button feel interactive.
  cardPressed: {
    opacity: 0.95,
    transform: [{ scale: 0.98 }],
  },

  // Makes the gradient fill the whole button.
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },

  // Adds a subtle dark overlay over the gradient for better text contrast.
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  // Positions the icon and text in the centre of the button.
  content: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  // Circular background behind the icon.
  // Equal width and height with borderRadius creates the circle shape.
  iconContainer: {
    width: 58,
    height: 58,
    marginBottom: 8,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },

  // Styles the main button title.
  title: {
    fontSize: 32,
    textAlign: "center",
  },
});