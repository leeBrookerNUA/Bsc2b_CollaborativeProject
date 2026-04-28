import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface HelpTipCardProps {
    iconName: React.ComponentProps<typeof FontAwesome6>["name"];
    title: string;

}

export default function HelpTipCard(props: HelpTipCardProps) {
    const { iconName, title } = props;

    return (
        <View style={styles.card}>
            <View style={styles.contentRow}>

                <View style={styles.iconContainer}>
                    <FontAwesome6 name={iconName} size={20} color="#FFFFFF" style={styles.icon} />
                </View>

                <AppText style={styles.title}>{title}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "rgba(46, 46, 46, 0.15)",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.12)",
    paddingVertical: 6,
    paddingHorizontal: 10,
    overflow: "hidden",
    minHeight: 50,

    alignItems: "center",
    justifyContent: "center",
  },

  contentRow: {
    maxWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 24,
    height: 24,
    lineHeight: 24,
    textAlign: "center",
    textAlignVertical: "center",
  },

  title: {
    fontSize: 14,
    lineHeight: 18,
    flexShrink: 1,
    flexWrap: "wrap",
    textAlign: "center",
  },

  iconContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 99,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    flexShrink: 0,
  },
});