import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ROUTE } from "../navigator/common";
import { navigateTo } from "../navigator/NavigationService";


const HelloScreen = () => {
    const navigateToPopularScreen = () => {
        navigateTo(ROUTE.POPULAR)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.cover} source={require('../../assets/images/cover.jpg')} />
            </View>
            <Image style={styles.avatar} source={require('../../assets/images/avatar.jpg')} />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>Nguyễn Văn Dương</Text>
                    <Text style={styles.info}>React Native Developer</Text>
                    <Text style={styles.description}>Mong muốn trở thành một senior mobile</Text>

                    <View style={styles.info_container}>
                        <View>
                            <Text style={styles.normal_text}>Năm sinh:</Text>
                            <Text style={styles.normal_text}>Quê quán:</Text>
                            <Text style={styles.normal_text}>Kinh nghiệm:</Text>
                            <Text style={styles.normal_text}>Hiện tại: </Text>
                        </View>
                        <View style={{ marginStart: 20 }}>
                            <Text style={styles.normal_text}>1999</Text>
                            <Text style={styles.normal_text}>Vũ Thư, Thái Bình</Text>
                            <Text style={styles.normal_text}>1 năm</Text>
                            <Text style={styles.normal_text}>Sinh viên năm cuối, tháng 8 ra trường</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={navigateToPopularScreen}>
                        <Text>Popular Films</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HelloScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    cover: {
        height: 200,
        resizeMode: 'stretch',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130,
    },
    name: {
        fontSize: 22,
        color: "balck",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
        flex: 1,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10,
    },
    info_container: {
        flexDirection: 'row',
        marginTop: 50
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center',
    },
    normal_text: {
        fontSize: 16,
        color: "#696969",
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});