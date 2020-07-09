import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";

const Button = props => {
    let {
        btnBackgroundColor = "#fff",
        btnTextColor = "#6AD6C0",
        children,
        onPress,
        style = {},
        showIcon = false,
        path,
        isLoading = false
    } = props;
    return (
        <TouchableOpacity
            style={[styles.btnContainer, { backgroundColor: btnBackgroundColor }, { ...style }]}
            onPress={onPress}
            disabled={isLoading}>
            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>
                {!isLoading ? (
                    <Text style={{ color: btnTextColor }}>{children}</Text>
                ) : (
                    <ActivityIndicator color={btnTextColor} style={{ marginLeft: 10 }} />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    btnContainer: {
        padding: 5,
        borderWidth: 1,
        borderColor: "#000",
        alignItems: "center",
        justifyContent: "center"
    }
});
