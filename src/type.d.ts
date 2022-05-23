import { NavigationProp, RouteProp } from "@react-navigation/core";
import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";
export interface NavigationServiceConfig {
    navigator?: NavigationContainerRef<{}>,
}

export interface Action {
    type: string,
    payload?: any,
}

export interface PropsScreen {
    children?: React.ReactComponentElement,
}

export interface Film {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface PropsState {
    currentPage: number,
    isLoadMore: boolean,
    isRefresh: boolean,
    films: Array<Film>,
    totalPages: number,
    totalFilms: number
}

export interface PropsContext extends PropsScreen {
    loadmore: Function,
    refresh: Function,
}

export interface PropsFilmCard extends PropsScreen {
    data: Film
}