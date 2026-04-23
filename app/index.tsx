import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ButtonCard from "../components/ButtonCard";
import Header from "../components/Header";
import ScreenBackground from "../components/ScreenBackground";

export default function Index() {
    return (
        <ScreenBackground>{/* Background component that wraps the entire screen and displays background star image */}
            <View style={styles.mainview}>

                <Header title="Home" onBackPress={() => { }} onSettingsPress={() => { }} />

                <View style={styles.heightSpacer20} />{/* Background component that wraps the entire screen and displays background star image */}

                <View>
                    <AppText style={{ fontSize: 16 }}>Welcome to our app about generating electricity!</AppText>
                </View>

                <View style={styles.heightSpacer20} />

                <View style={styles.container}>
                    <View style={styles.row}>{/* Row of buttons that user will be able to press to goto different parts of app */}
                        <ButtonCard
                            title="Play"
                            gradientColors={["#18d467", "#18d467", "#18d467"]}
                            iconName="play"
                            onMainButtonPress={() => { console.log("Play"); }}
                        />
                    </View>
                    <View style={styles.heightSpacer20} />
                    <View style={styles.row}>

                        <ButtonCard
                            title="Instructions"
                            gradientColors={["#c7ad1c", "#c7ad1c", "#c7ad1c"]}
                            iconName="wrench"
                            onMainButtonPress={() => { console.log("Instructions"); }}
                        />
                    </View>

                    <View style={styles.heightSpacer20} />

                    <View style={styles.row}>
                        <ButtonCard
                            title="Facts and Tips"
                            gradientColors={["#196baf", "#196baf", "#196baf"]}
                            iconName="industry"
                            onMainButtonPress={() => { console.log("Facts and Tips"); }}
                        />
                    </View>

                    <View style={styles.heightSpacer20} />

                    <View style={styles.row}>
                        <ButtonCard
                            title="Settings"
                            gradientColors={["#5d0b6d", "#5d0b6d", "#5d0b6d"]}
                            iconName="cogs"
                            onMainButtonPress={() => { console.log("Settings"); }}
                        />
                    </View>
                </View>
            </View>
        </ScreenBackground>
    );
}

//Styles used for the home page
const styles = StyleSheet.create({
    mainview: { flex: 1, alignItems: "center", paddingTop: 24, backgroundColor: "transparent", borderWidth: 0, borderColor: "transparent", },
    container: { width: "100%", paddingHorizontal: 16, marginTop: 12, },
    row: { flexDirection: "row", },
    widthSpacer12: { width: 12, },
    heightSpacer12: { height: 12, },
    heightSpacer20: { height: 20, },
});
