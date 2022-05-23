import { Action, PropsState } from "../type";
import { ACTION_TYPE } from "./common";

export const defaultState: PropsState = {
    currentPage: 0,
    isLoadMore: false,
    isRefresh: false,
    films: [],
    totalFilms: 0,
    totalPages: 0
}

export const reducer = (state = defaultState, action: Action) => {
    switch (action.type) {
        case ACTION_TYPE.LOAD_MORE:
            return {
                ...state,
                currentPage: action.payload.page,
                films: [...state.films, ...action.payload.results],
                totalFilms: action.payload.total_results,
                totalPages: action.payload.total_pages
            }

        case ACTION_TYPE.REFRESH:
            return {
                ...state,
                currentPage: action.payload.page,
                films: [...action.payload.results],
                totalFilms: action.payload.total_results,
                totalPages: action.payload.total_pages
            }

        case ACTION_TYPE.START_LOAD_MORE:
            return {
                ...state,
                isLoadMore: true,
            }

        case ACTION_TYPE.END_LOAD_MORE:
            return {
                ...state,
                isLoadMore: false,
            }

        case ACTION_TYPE.START_REFRESH:
            return {
                ...state,
                films: [],
                isRefresh: true,
            }

        case ACTION_TYPE.END_REFRESH:
            return {
                ...state,
                isRefresh: false,
            }
            
    }
}