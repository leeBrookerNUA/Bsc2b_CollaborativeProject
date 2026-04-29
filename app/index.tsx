import { Redirect } from "expo-router";
import React from "react";

// This is the first file Expo Router loads when the app starts.
// It automatically sends the user to the Home page instead of showing a separate index screen.
export default function Index() {
  /* Redirect moves the user straight to the main Home page. This makes HomePage the starting screen of the app. */
  return <Redirect href="/pages/HomePage" />;
}