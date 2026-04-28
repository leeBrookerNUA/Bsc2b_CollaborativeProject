import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "../../components/ActionButton";
import AudioSettingRow from "../../components/AudioSettingRow";
import Header from "../../components/Header";
import ScreenBackground from "../../components/ScreenBackground";
import SettingsPanel from "../../components/SettingsPanel";

export default function AudioPage() {
  const router = useRouter();
  const [voiceOn, setVoiceOn] = useState(true);

  return (
    <ScreenBackground>
      <View style={styles.page}>
        <View>
          <Header
            title="Audio"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          <View style={styles.spacer16} />

          <View style={styles.container}>
            <SettingsPanel title="Audio">
              <AudioSettingRow
                iconName="volume-up"
                title="Volume"
                type="slider"
              />

              <AudioSettingRow
                iconName="microphone"
                title="Voice on/off"
                type="switch"
                switchValue={voiceOn}
                onSwitchChange={setVoiceOn}
              />
            </SettingsPanel>
          </View>
        </View>

        <ActionButton
          title="Back Home"
          onBackHomePress={() => {
            router.navigate("/pages/HomePage");
          }}
        />
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "space-between",
  },

  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  spacer16: {
    height: 16,
  },
});