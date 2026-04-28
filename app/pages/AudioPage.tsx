import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import ActionButton from "../../components/buttons/ActionButton";
import AudioSettingRow from "../../components/settings/AudioSettingRow";
import SettingsPanel from "../../components/settings/SettingsPanel";

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
            onBackPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          <View style={styles.container}>
            <View style={styles.spacer16} />

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
          backgroundColor="rgba(255, 255, 255, 0.22)"
          pressedBackgroundColor="rgba(255, 255, 255, 0.35)"
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
    flexGrow: 1,
    width: "100%",
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