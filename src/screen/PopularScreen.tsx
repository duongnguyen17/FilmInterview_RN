import React, { memo, useCallback, useContext, useEffect } from "react";
import { ActivityIndicator, FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, View } from "react-native";
import FilmCard from "../component/FilmCard";
import Context from "../context/Context";
import { Film } from "../type";
import { calDimen } from "../utils";

const renderHeaderList = memo(() => (
    <Text style={styles.headerList}>Popular list</Text>
))
const renderItem = ({ item }: { item: Film }) => {
    return (
        <FilmCard data={item} />
    )
}

const PopularScreen = () => {
    const { films, loadmore, refresh, isLoadMore, isRefresh } = useContext(Context)

    useEffect(() => {
        refresh()
    }, [])

    const renderFooter = useCallback(() => (
        isLoadMore ?
            <View>
                <ActivityIndicator size={'large'} />
            </View> : null
    ), [isLoadMore])
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.list}
                refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={refresh} />}
                data={films}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-around' }}
                ListHeaderComponent={renderHeaderList}
                onEndReached={loadmore}
                initialNumToRender={8}
                ListFooterComponent={renderFooter}
            />
        </SafeAreaView>
    )
}

export default PopularScreen

const styles = StyleSheet.create({
    headerList: {
        marginStart: calDimen(0.05, 'horizontal'),
        fontWeight: "bold",
        fontSize: 24,
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    list: {
        marginTop: 10,
    },
})