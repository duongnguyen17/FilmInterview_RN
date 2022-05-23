import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Point = memo(({ point }: { point: number }) => {
    let pointSplice = point.toString().split(".")
    return (
        <LinearGradient colors={['#db3168', '#ea8b0b']}
            style={styles.container}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}>
            <View style={styles.point_container}>
                <Text style={[styles.text, styles.big_text]}>{pointSplice[0]}</Text>
                <Text style={[styles.text, styles.small_text]}>.{pointSplice[1] ?? 0}</Text>
            </View>

        </LinearGradient >)
})

export default Point

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        width: 40,
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
    },
    point_container: {
        justifyContent: 'center',
        flexDirection: 'row',
        height:20,
    },
    text: {
        color: 'white',
    },
    big_text: {
        lineHeight: 24,
        fontSize: 24,
        fontWeight: 'bold',
    },
    small_text: {
        lineHeight: 16,
        fontSize: 16,
        fontWeight: '400',
    },
})