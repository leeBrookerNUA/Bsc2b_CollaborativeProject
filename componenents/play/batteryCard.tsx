import { StyleSheet, Text, View } from "react-native";

interface BatteryCardProps {
    bgColor: string;
    text: string;
    icon:  string;
}

export default function batteryCard (props: BatteryCardProps) {
    const {bgColor, text, icon } = props;

        <View style = {styles.container}>
            <Icon> {icon} </Icon>
            <Text> {text} </Text>
        </View>

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3A86FF"
    }
})