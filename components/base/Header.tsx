import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { playLoadedSound } from "../../audio/audio";
import AppHeading from "./AppHeading";

// Creates a type that only allows valid FontAwesome5 icon names.
// This helps prevent spelling mistakes when choosing icons for the header.
type HeaderIconName = React.ComponentProps<typeof FontAwesome5>["name"];

interface HeaderProps {
  // Text displayed in the centre of the header.
  title: string;

  // Optional icon shown on the left side of the header.
  leftIconName?: HeaderIconName;

  // Optional icon shown on the right side of the header.
  rightIconName?: HeaderIconName;

  // Function called when the left icon is pressed.
  onBackPress?: () => void;

  // Function called when the right icon is pressed.
  onSettingsPress?: () => void;
}

// Header is a reusable component used at the top of app screens.
// It can show a title, an optional left icon, and an optional right icon.
export default function Header({
  title, leftIconName, rightIconName, onBackPress, onSettingsPress, }: HeaderProps) {

  /* Helper function used to create an icon button. This avoids repeating the same Pressable icon code for the left and right icons. */
  const renderIconButton = (
    iconName?: HeaderIconName,
    onPress?: () => void
  ) => (
    <View style={styles.iconSlot}>
      {/* Only renders the icon button if an icon name has been provided. If no icon is passed in, the empty slot still keeps the title centred.*/}
      {iconName && (
        <Pressable

          // Runs the icon's press function if one has been provided.
          onPress={async () => {
            await playLoadedSound();
            onPress?.();
          }}

          android_disableSound={true} // Disables the default Android button sound as we have our own custom button sound effect.

          // Disables the button if there is no press function.
          disabled={!onPress}

          // Makes the touch area slightly larger, improving usability.
          hitSlop={8}

          // Changes the button style while it is being pressed.
          style={({ pressed }) => [
            styles.iconButton,
            pressed && onPress && styles.iconButtonPressed,
          ]}
        >
          <FontAwesome5 name={iconName} size={28} color="#FFFFFF" />
        </Pressable>
      )}
    </View>
  );

  return (
    <View style={styles.header}>

      {/* Renders the optional left icon, usually used as a back button. */}
      {renderIconButton(leftIconName, onBackPress)}

      {/* Displays the screen title in the centre. numberOfLines prevents long titles from wrapping onto another line.*/}
      <AppHeading style={styles.title} numberOfLines={1}>
        {title}
      </AppHeading>

      {/* Renders the optional right icon, usually used as a settings button. */}
      {renderIconButton(rightIconName, onSettingsPress)}
    </View>
  );
}

const styles = StyleSheet.create({

  // Main header container.
  // The row layout places the left icon, title, and right icon on one line.
  header: {
    width: "100%",
    paddingHorizontal: 4,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  // Holds space for each icon.
  // Keeping both icon slots the same size helps keep the title centred.
  iconSlot: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  // Default circular icon button style.
  // The transparent background and border match the glass style of the app.
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.12)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.14)",
  },

  // Style applied while the icon button is being pressed.
  // The scale makes the button feel interactive.
  iconButtonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.95 }],
    backgroundColor: "rgba(58, 134, 255, 0.75)",
    borderColor: "rgba(255, 255, 255, 0.5)",
  },

  // Header title style.
  // flex: 1 lets the title take the remaining space between the icon slots.
  title: {
    flex: 1,
    fontSize: 32,
    textAlign: "center",
  },
});