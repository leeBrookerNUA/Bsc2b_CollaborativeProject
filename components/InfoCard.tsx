import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

// Define the props for the InfoCard component, including title and subtitle
interface InfoCardProps {
  title: string;
  subtitle: string;
}


// InfoCard component that displays information with a gradient background, along with title and subtitle
export default function InfoCard(props: InfoCardProps) {
  // Destructure props for easier access to individual properties
  const { title, subtitle } = props;



    return (
    // Card container that holds the battery icon and text information, styled with a background color and padding
    <LinearGradient style={styles.card} colors={["#D2A8FF", "#9B5DE5"]}>
      <View style={styles.darkOverlay} />
      <View style={styles.lightOverlay} />

      <AppHeading style={styles.title}>{title}</AppHeading>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
       
    </LinearGradient>
  );
}

// Styles for the InfoCard component, including card container, battery icon, and text styles
const styles = StyleSheet.create({
  // Card container with background and padding
  card: {
    width: "100%",
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 120,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 24,
  },
  lightOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 24,
  },


  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 6,
  },
 
  subtitle: {
    opacity: 0.8,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 6,
  },

});