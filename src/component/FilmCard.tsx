import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PropsFilmCard } from "../type";
import { calDimen, getUriImageFilm } from "../utils";
import Point from "./Point";

const FilmCard = ({ data }: PropsFilmCard) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>

            <Image source={{ uri: getUriImageFilm(data.poster_path, data.id) }} resizeMode="cover" style={styles.image} />
            <View style={styles.point_container}>
                <Point point={data.vote_average} />
            </View>

            <View style={styles.title_container}>
                <Text style={styles.release_text}>{data.release_date.slice(0, 4)}</Text>
                <Text style={styles.name_text}>{data.title}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default FilmCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        width: calDimen(0.45, 'horizontal'),
        height: calDimen(0.45, 'vertical'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 20,
    },
    image: {
        flex: 1,
        borderRadius: 20,
    },
    point_container: {
        position: 'absolute',
        zIndex: 99,
        end: 14,
        top: 14,
    },
    title_container: {
        position: 'absolute',
        start: 14,
        bottom: 14,
    },
    release_text: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: '400',
        fontSize: 18,
    },
    name_text: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
    },
})