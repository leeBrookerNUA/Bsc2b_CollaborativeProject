import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AccessibilitySettingRow from "../../components/AccessibilitySettingRow";
import ActionButton from "../../components/ActionButton";
import Header from "../../components/Header";
import ScreenBackground from "../../components/ScreenBackground";
import SettingsPanel from "../../components/SettingsPanel";

export default function AccessibilityPage() {
  const router = useRouter();

  const [textSize, setTextSize] = useState(12);
  const [highContrast, setHighContrast] = useState(false);
  const [colourBlind, setColourBlind] = useState(false);

  function decreaseTextSize() {
    if (textSize > 10) {
      setTextSize(textSize - 1);
    }
  }

  function increaseTextSize() {
    if (textSize < 20) {
      setTextSize(textSize + 1);
    }
  }

  return (
    <ScreenBackground>
      <View style={styles.page}>
        <View>
          <Header
            title="Accessibility"
            leftIconName="arrow-circle-left"
            onBackPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          <View style={styles.container}>
            <View style={styles.spacer16} />

            <SettingsPanel title="Visual">
              <AccessibilitySettingRow
                iconType="text"
                title="Text Size"
                type="textSize"
                textSize={textSize}
                onDecrease={decreaseTextSize}
                onIncrease={increaseTextSize}
              />

              <AccessibilitySettingRow
                iconType="contrast"
                title="High Contrast"
                type="switch"
                value={highContrast}
                onValueChange={setHighContrast}
              />

              <AccessibilitySettingRow
                iconType="eye"
                title="Colour Blind"
                type="switch"
                value={colourBlind}
                onValueChange={setColourBlind}
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