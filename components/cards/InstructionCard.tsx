import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../base/AppText";

type IconLibrary = "Feather" | "MaterialIcons" | "Ionicons";

interface InstructionCardProps {
  iconLibrary?: IconLibrary;
  iconName:
    | React.ComponentProps<typeof Feather>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof Ionicons>["name"];
  title: string;
}

const iconLibraries = {
  Feather,
  MaterialIcons,
  Ionicons,
};

export default function InstructionCard({
  iconLibrary = "Feather",
  iconName,
  title,
}: InstructionCardProps) {
  const Icon = iconLibraries[iconLibrary];

  return (
    <View style={styles.card}>
      <View style={styles.contentRow}>
        <View style={styles.iconContainer}>
          <Icon name={iconName as any} size={24} color="#FFFFFF" />
        </View>

        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

  contentRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 32,
    height: 32,
    marginRight: 8,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },

  title: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
  },
});