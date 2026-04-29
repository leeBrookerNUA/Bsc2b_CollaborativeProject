import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";

import {
  Fredoka_400Regular,
  Fredoka_500Medium,
  Fredoka_600SemiBold,
  Fredoka_700Bold,
} from "@expo-google-fonts/fredoka";

import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

// RootLayout is the main layout file for the app.
// It loads the custom fonts before showing any screens,
// and it controls the overall navigation stack.
export default function RootLayout() {
  /*
    Loads all custom fonts used throughout the app.
    fontsLoaded becomes true once every font has finished loading.
  */
  const [fontsLoaded] = useFonts({
    Fredoka_400Regular,
    Fredoka_500Medium,
    Fredoka_600SemiBold,
    Fredoka_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  /*
    Stops the app from rendering before the fonts are ready.
    This prevents text from briefly appearing in the wrong default font.
  */
  if (!fontsLoaded) {
    return null;
  }

  /*
    Displays the app screens using Expo Router's Stack navigation.
    headerShown is set to false because the app uses its own custom Header component.
  */
  return <Stack screenOptions={{ headerShown: false }} />;
}