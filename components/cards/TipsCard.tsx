import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../base/AppText";

type IconLibrary = "AntDesign" | "MaterialIcons" | "MaterialCommunityIcons";

interface TipsCardProps {
  iconLibrary?: IconLibrary;
  iconName:
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  title: string;
}

export default function TipsCard(props: TipsCardProps) {
  const { iconLibrary = "AntDesign", iconName, title } = props;

  const Icon =
    iconLibrary === "MaterialIcons"
      ? MaterialIcons
      : iconLibrary === "MaterialCommunityIcons"
        ? MaterialCommunityIcons
        : AntDesign;

  return (
    <View style={styles.card}>
      <View style={styles.contentRow}>
        <View style={styles.iconContainer}>
          <Icon
            name={iconName as any}
            size={20}
            color="#FFFFFF"
            style={styles.icon}
          />
        </View>

        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 46,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.12)",
    paddingVertical: 9,
    paddingHorizontal: 14,
    justifyContent: "center",
    overflow: "hidden",
  },

  contentRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 99,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    flexShrink: 0,
  },

  icon: {
    width: 24,
    height: 24,
    lineHeight: 24,
    textAlign: "center",
    textAlignVertical: "center",
  },

  title: {
    flex: 1,
    flexShrink: 1,
    fontSize: 16,
    lineHeight: 20,
    textAlign: "left",
  },
});