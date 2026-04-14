import BatteryCard from "@/componenents/play/BatteryCard";
import { StyleSheet, View } from "react-native";

export default function PlayScreen() {
  return (
    <View style={StyleSheet.container}>
      <BatteryCard
        title="Hand Crank is Turning!"
        subtitle="Charging Battery..."
        chargeText="65% Charged!"
        remainingText="120 Cranks Remaining"
        fillPercent={65}
      />
    </View>
  );
}
