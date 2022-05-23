import React, { useEffect, useRef } from "react";
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { goBack, setNavigator } from "./NavigationService";
import { ROUTE } from "./common";
import HelloScreen from "../screen/HelloScreen";
import PopularScreen from "../screen/PopularScreen";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    const navigation =
        useRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

    useEffect(() => {
        setNavigator(navigation);
    }, []);
    return (
        ///@ts-ignore conflict giữa react-navigation-ts và React-ts
        <NavigationContainer ref={navigation}>
            <Stack.Navigator initialRouteName={ROUTE.HELLO} screenOptions={{
            }}>
                <Stack.Screen name={ROUTE.HELLO} component={HelloScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name={ROUTE.POPULAR} component={PopularScreen} options={{
                    header: () => (
                        <View style={styles.header}>
                            <TouchableOpacity
                                style={styles.back_button}
                                onPress={() => {
                                    goBack();
                                }}>
                                <MaterialIcons
                                    name="arrow-back-ios"
                                    size={23}
                                    color={"#2f2f2f"}
                                />
                                <Text style={styles.back_text}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'white',
    },
    back_button: {
        paddingHorizontal: 26,
        height: '100%',
        flexDirection: "row",
        alignItems: 'center',
    },
    back_text: {
        marginStart: 4,
        fontWeight: "400",
        fontSize: 24,
        color: '#2f2f2f'
    },
})