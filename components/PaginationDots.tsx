import React from "react";
import { StyleSheet, View } from "react-native";

interface PaginationDotsProps {
    total: number;
    activeIndex: number;
}

export default function PaginationDots(props: PaginationDotsProps) {
    const { total, activeIndex } = props;

    return (
        <View style={styles.container}>
            {/* Creates an Array with the Number of dots I want */}
            {Array.from({ length: total })
                // Loops through them and creates on <View> per dot
                .map((_, index) => (
                    <View
                        key={index}
                        style={[
                            // Makes the active dot use the active styles
                            styles.dot, index === activeIndex && styles.dotActive,
                        ]}
                    />
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 99,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
    dotActive: {
        backgroundColor: "#FFFFFF",
    },
});