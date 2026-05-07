import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Modal, Pressable, StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

interface WelcomeModalProps {
  visible: boolean;
  onClose: () => void;
}

// WelcomeModal introduces the user to the app when it first opens.
// It shows Wattson, the Power Pals name, and explains what the toy does in a friendly way.
export default function WelcomeModal({ visible, onClose }: WelcomeModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <LinearGradient
          colors={["#6DAEFF", "#3A86FF", "#3A86FF"]}
          style={styles.modalCard}
        >
          {/* Lightning background image. It links to the energy theme and sits behind the main modal content. */}
          <View style={styles.lightningBackground} pointerEvents="none">

            <Image
              source={require("../../assets/images/energy-bg.png")}
              style={styles.lightningBackgroundImage}
              resizeMode="cover"
            />

          </View>

          {/* Top section holds Wattson and the soft energy circles behind him. */}
          <View style={styles.mascotSection}>
            <View style={styles.energyCircleOne} />
            <View style={styles.energyCircleTwo} />

            <Image
              source={require("../../assets/images/wattson.png")}
              style={styles.mascot}
              resizeMode="contain"
            />
          </View>

          {/* Small label above the title introduces the mascot. */}
          <View style={styles.tag}>
            <AppHeading style={styles.tagText}>Meet Wattson!</AppHeading>
          </View>

          <AppHeading style={styles.title}>Welcome to Power Pals!</AppHeading>

          <AppHeading style={styles.name}>I&apos;m Wattson!</AppHeading>

          <AppText style={styles.description}>
            I help you learn how energy can be made using a hand crank,
            sunlight or buttons. Charge me up, explore fun facts, and test your
            knowledge with quizzes!
          </AppText>

          {/* Button closes the modal and lets the user continue into the app. */}
          <Pressable style={styles.button} onPress={onClose}>
            <LinearGradient
              colors={["#FFE066", "#E0C120"]}
              style={styles.buttonGradient}
            >
              <AppHeading style={styles.buttonText}>Let&apos;s Go!</AppHeading>
            </LinearGradient>
          </Pressable>
        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({

  // Dark transparent overlay behind the modal.
  // This makes the welcome pop-up stand out from the home screen without fully hiding it.
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.28)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  // Main modal card.
  modalCard: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 30,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",

    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.7)",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,

    elevation: 6,
  },

  // Full-card background layer for the lightning image.
  // absoluteFillObject lets the image cover the whole card behind the content.
  lightningBackground: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },

  // Opacity keeps the bolts visible but soft enough so the text stays readable.
  lightningBackgroundImage: {
    width: "100%",
    height: "100%",
    opacity: 0.65,
  },

  // Top section for Wattson.
  // zIndex keeps the mascot above the lightning background.
  mascotSection: {
    width: "100%",
    height: 155,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    position: "relative",
    zIndex: 1,
  },

  // Wattson mascot image.
  // The larger size makes the character the main focus of the welcome modal.
  mascot: {
    width: 155,
    height: 155,
    zIndex: 2,
  },

  // Large soft circle behind Wattson.
  // This helps separate the mascot from the blue background.
  energyCircleOne: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },

  // Smaller yellow circle behind Wattson.
  // This adds a subtle energy glow using the secondary brand colour.
  energyCircleTwo: {
    position: "absolute",
    width: 95,
    height: 95,
    borderRadius: 47.5,
    backgroundColor: "rgba(224, 193, 32, 0.12)",
  },

  // Small rounded label above the main title.
  // The transparent white background makes it feel like part of the modal design.
  tag: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    marginBottom: 12,
    zIndex: 1,
  },

  // Label text.
  tagText: {
    fontSize: 15,
    lineHeight: 19,
    color: "#FFFFFF",
  },

  // Main welcome heading.
  // The larger font size makes the product name clear and child-friendly.
  title: {
    fontSize: 25,
    lineHeight: 31,
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 8,
    zIndex: 1,
  },

  // Mascot introduction text.
  name: {
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: "#E0C120",
    marginBottom: 12,
    zIndex: 1,
  },

  // Short description explaining what the toy does.
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#FFFFFF",
    opacity: 0.96,
    marginBottom: 24,
    zIndex: 1,
  },

  // Outer button wrapper.
  // overflow hidden keeps the gradient clipped to the rounded button shape.
  button: {
    borderRadius: 26,
    overflow: "hidden",
    zIndex: 1,
  },

  // Yellow gradient inside the button.
  buttonGradient: {
    minWidth: 145,
    paddingVertical: 13,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
  },

  // Button text.
  buttonText: {
    fontSize: 19,
    lineHeight: 23,
    color: "#FFFFFF",
  },
});