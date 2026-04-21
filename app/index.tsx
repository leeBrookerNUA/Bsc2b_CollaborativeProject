import Header from '@/components/Header';
import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import PillButtonCard from "../components/PillButtonCard";
import ScreenBackground from "../components/ScreenBackground";

export default function Index() {
    const [selectedPill, setSelectedPill] = useState("Feature 1");

    return (
        <ScreenBackground>  {/* Background component that wraps the entire screen and displays background star image */}
            <View style={styles.mainview}> 

                <Header title="Home" onBackPress={() => { }} onSettingsPress={() => { }} />

                <View style={styles.heightSpacer20} /> {/* Styling that makes space between parts */ }

                <View> 
                    <AppText style={{ fontSize: 16 }}>Welcome to our app about generating electricity!</AppText> 
                </View>

                <View style={styles.heightSpacer20} />

                <View style={styles.container}>
                    <View style={styles.row}> {/* Row of buttons that user will be able to press to goto different parts of app */ }
                        <PillButtonCard
                            title="Play"
                            selected={selectedPill === "Play"}
                            onPillPress={() => { setSelectedPill("Play"); console.log("Play"); }}
                        />

                        <View style={styles.widthSpacer12} />

                        <PillButtonCard
                            title="Instructions"
                            selected={selectedPill === "Instructions"}
                            onPillPress={() => { setSelectedPill("Instructions"); console.log("Instructions"); }}
                        />

                    </View>

                    <View style={styles.heightSpacer20} />

                    <View style={styles.row}>
                        <PillButtonCard
                            title="Facts and Tips"
                            selected={selectedPill === "Facts and Tips"}
                            onPillPress={() => { setSelectedPill("Facts and Tips"); console.log("Facts and Tips"); }}
                        />

                        <View style={styles.widthSpacer12} />

                        <PillButtonCard
                            title="Settings"
                            selected={selectedPill === "Settings"}
                            onPillPress={() => { setSelectedPill("Settings"); console.log("Settings"); }}
                        />

                    </View>
                </View>
            </View>
        </ScreenBackground>
    );
}
{/* Styles used for the home page */ }
const styles = StyleSheet.create({ 
    title: { fontSize: 24, fontWeight: "bold", color: "#fff", fontFamily: "Fredoka One", },
    mainview: { flex: 1, alignItems: "center", paddingTop: 24, backgroundColor: "transparent", borderWidth: 0, borderColor: "transparent", },
    introBox: { width: "100%", paddingHorizontal: 16, paddingVertical: 12, backgroundColor: "#3abecfff", borderRadius: 12, },
    container: { width: "100%", paddingHorizontal: 16, marginTop: 12, },
    row: { flexDirection: "row", },
    widthSpacer12: { width: 12, },
    heightSpacer12: { height: 12, },
    heightSpacer20: { height: 20, },
});
