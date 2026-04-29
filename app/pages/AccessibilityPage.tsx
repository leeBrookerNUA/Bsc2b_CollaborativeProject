import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import ActionButton from "../../components/buttons/ActionButton";
import AccessibilitySettingRow from "../../components/settings/AccessibilitySettingRow";
import SettingsPanel from "../../components/settings/SettingsPanel";

// This screen allows the user to change visual accessibility settings, such as text size, high contrast mode, and colour blind mode.
export default function AccessibilityPage() {

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  // Stores the current text size value shown on the Text Size setting row.
  // The increase and decrease buttons update this value.
  const [textSize, setTextSize] = useState(12);

  // Stores whether high contrast mode is switched on or off.
  // This value is connected to the High Contrast switch.
  const [highContrast, setHighContrast] = useState(false);

  // Stores whether colour blind mode is switched on or off.
  // This value is connected to the Colour Blind switch.
  const [colourBlind, setColourBlind] = useState(false);

  // Decreases the text size by 1.
  // The if statement prevents the value from going below the minimum size of 10.
  function decreaseTextSize() {
    if (textSize > 10) {
      setTextSize(textSize - 1);
    }
  }

  // Increases the text size by 1.
  // The if statement prevents the value from going above the maximum size of 20.
  function increaseTextSize() {
    if (textSize < 20) {
      setTextSize(textSize + 1);
    }
  }

  return (
    <ScreenBackground>

      {/* Main page layout. The top section contains the header and accessibility settings, while the Back Home button stays near the bottom of the screen. */}
      <View style={styles.page}>
        <View>

          <Header
            title="Accessibility"
            leftIconName="arrow-circle-left"
            onBackPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          {/* Container adds padding around the settings panel so the content does not touch the screen edges. */}
          <View style={styles.container}>

            {/* Adds space between the header and the settings panel. */}
            <View style={styles.spacer16} />

            {/* SettingsPanel groups related accessibility settings together inside one reusable styled panel. */}
            <SettingsPanel title="Visual">

              {/*  Text Size setting row. This row uses the textSize type so the user can increase or decrease the text size value. */}
              <AccessibilitySettingRow
                iconLibrary="FontAwesome"
                iconName="font"
                title="Text Size"
                type="textSize"
                textSize={textSize}
                onDecrease={decreaseTextSize}
                onIncrease={increaseTextSize}
              />

              {/* High Contrast setting row. This row uses a switch and updates the highContrast state whenever the user turns the setting on or off.*/}
              <AccessibilitySettingRow
                iconLibrary="FontAwesome5"
                iconName="adjust"
                title="High Contrast"
                type="switch"
                value={highContrast}
                onValueChange={setHighContrast}
              />
              
              {/* Colour Blind setting row. This row also uses a switch and stores its value in the colourBlind state. */}
              <AccessibilitySettingRow
                iconLibrary="FontAwesome"
                iconName="eye"
                title="Colour Blind"
                type="switch"
                value={colourBlind}
                onValueChange={setColourBlind}
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
  // flexGrow helps the page fill the available height, while space-between separates the main content from the bottom button.
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  // Controls the spacing around the settings panel.
  // The padding keeps the panel away from the edges of the screen.
  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  spacer16: {
    height: 16,
  },
});