import React from "react";
import { StyleSheet, View } from "react-native";

interface QuizProgressBarProps {
    currentQuestion: number;
    totalQuestions: number;
}

export default function QuizProgressBar(props: QuizProgressBarProps) {
    const { currentQuestion, totalQuestions } = props;

    const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

    return (
        <View style={styles.track}>
            <View style={[styles.fill, {width: `${progressPercent}%` }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    track: {
        width: "100%",
        height: 8,
        borderRadius: 99,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        overflow: "hidden",
    },
    fill: {
        height: "100%",
        borderRadius: 99,
        backgroundColor: "#FFD60A"
    }
})