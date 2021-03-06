import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import IconArrow from "../../common/IconJsx/IconArrow";

export default function NavPanel({ navigation, isArchive }) {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    if (isArchive) {
                        navigation.navigate("Archive");
                    } else {
                        navigation.goBack("Home");
                    }
                }}
                style={styles.iconArrowBox}>
                <IconArrow color='white' />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 8 },
    iconArrowBox: {
        padding: 12,
        paddingLeft: 4,
        flex: 0,
        maxWidth: 40,
        flexGrow: 1,
        alignSelf: "stretch",
        justifySelf: "stretch",
        marginTop: 32,
    },
});
