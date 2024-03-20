import { StyleSheet, Text } from "react-native";

export const cardStyle = StyleSheet.create({
    container: {
        backgroundColor: "white",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.85,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: "50%",
    },
    header: {},
    social: {},

});