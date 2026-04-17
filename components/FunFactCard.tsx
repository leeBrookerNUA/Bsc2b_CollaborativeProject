import React from "react";
import {StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./App Text"
import { LinearGradient } from "expo-linear-gradient";

interface FunFactCardProps {
    title: string;
    subtitle: string;
    button: string;
}

export default function FunFactCard(props: FunFactCardProps) {

    const { title, subtitle, button} = this.props.
    
    return (
        <LinearGradient style={styles.card} colors {["#FFF2A6", "#FFE066", "#E0C120"]}>
            <AppHeading style={styles.title}>{title}</AppHeading>
        </LinearGradient>
    )
}
    
