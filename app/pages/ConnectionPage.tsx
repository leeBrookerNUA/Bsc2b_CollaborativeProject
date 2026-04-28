import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "../../components/ActionButton";
import ConnectionSettingRow from "../../components/ConnectionSettingRow";
import Header from "../../components/Header";
import ScreenBackground from "../../components/ScreenBackground";
import SettingsPanel from "../../components/SettingsPanel";

export default function ConnectionPage() {
  const router = useRouter();
  const [bluetoothOn, setBluetoothOn] = useState(false);

  return (
    <ScreenBackground>
      <View style={styles.page}>
        <View>
          <Header
            title="Connection"
            leftIconName="arrow-circle-left"
            onBackPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
            
          />

          <View style={styles.container}>
            <View style={styles.spacer16} />

            <SettingsPanel title="Connection">
              <ConnectionSettingRow
                iconName="wifi"
                title="WiFi Status"
                type="status"
                statusText="Searching"
              />

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