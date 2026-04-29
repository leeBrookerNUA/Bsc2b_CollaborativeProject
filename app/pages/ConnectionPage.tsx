import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import ActionButton from "../../components/buttons/ActionButton";
import ConnectionSettingRow from "../../components/settings/ConnectionSettingRow";
import SettingsPanel from "../../components/settings/SettingsPanel";

// This screen allows the user to view and change connection-related settings, such as WiFi status and Bluetooth.
export default function ConnectionPage() {

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  // Stores whether Bluetooth is currently switched on or off.
  // This value is passed into the Bluetooth switch and updated when the user changes it.
  const [bluetoothOn, setBluetoothOn] = useState(false);

  return (
    <ScreenBackground>
      {/* Main page layout. The top section contains the header and connection settings, while the Back Home button stays near the bottom of the screen. */}
      <View style={styles.page}>
        <View>
          
          <Header
            title="Connection"
            leftIconName="arrow-circle-left"
            onBackPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          {/* Container adds padding around the settings panel so the content does not touch the edges of the screen. */}
          <View style={styles.container}>

            {/* Adds space between the header and the settings panel. */}
            <View style={styles.spacer16} />

            {/* SettingsPanel groups related connection settings together inside one reusable styled panel. */}
            <SettingsPanel title="Connection">

              {/* WiFi status row. This displays the current WiFi connection state as text. */}
              <ConnectionSettingRow
                iconName="wifi"
                title="WiFi Status"
                type="status"
                statusText="Searching"
              />

              {/* Bluetooth setting row. This uses a switch connected to bluetoothOn state, allowing the user to turn Bluetooth on or off. */}
              <ConnectionSettingRow
                iconName="bluetooth-b"
                title="Bluetooth"
                type="switch"
                switchValue={bluetoothOn}
                onSwitchChange={setBluetoothOn}
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