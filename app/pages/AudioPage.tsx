import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import ActionButton from "../../components/buttons/ActionButton";
import AudioSettingRow from "../../components/settings/AudioSettingRow";
import SettingsPanel from "../../components/settings/SettingsPanel";

// This screen allows the user to change audio-related settings, such as volume and whether voice features are enabled.
export default function AudioPage() {

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  // Stores whether the voice setting is currently turned on.
  // This value is passed into the switch, and setVoiceOn updates it when changed.
  const [voiceOn, setVoiceOn] = useState(true);

  return (
    <ScreenBackground>

      {/* Main page layout. The top section contains the header and settings panel, while the Back Home button is kept near the bottom. */}
      <View style={styles.page}>
        <View>
          
          <Header
            title="Audio"
            leftIconName="arrow-circle-left"
            onBackPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          {/* Container adds spacing around the audio settings panel so it does not sit too close to the edge of the screen. */}
          <View style={styles.container}>

            {/* Adds vertical spacing between the header and the settings panel. */}
            <View style={styles.spacer16} />

            {/* SettingsPanel groups related audio settings together inside one reusable styled panel. */}
            <SettingsPanel title="Audio">

              {/* Volume setting row. This uses the slider version of AudioSettingRow.*/}
              <AudioSettingRow
                iconName="volume-up"
                title="Volume"
                type="slider"
              />

              {/* Voice on/off setting row. This uses the switch version of AudioSettingRow and connects the switch value to the voiceOn state. */}
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

        {/* Button used to return directly to the Home page. */}
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

  // Main page container.
  // flexGrow allows the screen content to fill the available height, and space-between separates the settings content from the bottom button.
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  // Adds padding around the settings panel and controls its width.
  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  spacer16: {
    height: 16,
  },
});