import React, { useReducer } from "react";
import { defaultState, reducer } from "./reducer";
import Context from "./Context";
import { PropsScreen } from "../type";
import { ACTION_TYPE } from "./common";
import { loadFilmsWithPage } from "../api/request";

const GlobalSate = (props: PropsScreen) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const loadmore = async () => {
        try {
            dispatch({ type: ACTION_TYPE.START_LOAD_MORE })
            const response = await loadFilmsWithPage(state?.currentPage + 1)
            dispatch({ type: ACTION_TYPE.LOAD_MORE, payload: { ...response } })
        } catch (error) {

        }
        finally {
            dispatch({ type: ACTION_TYPE.END_LOAD_MORE })
        }


    }

    const refresh = async () => {
        try {
            dispatch({ type: ACTION_TYPE.START_REFRESH })
            const response = await loadFilmsWithPage(1)
            dispatch({ type: ACTION_TYPE.REFRESH, payload: { ...response } })
        } catch (error) {

        }
        finally {
            dispatch({ type: ACTION_TYPE.END_REFRESH })
        }

    }

    return (
        <Context.Provider
            value={{
                currentPage: state?.currentPage ?? 0,
                isLoadMore: state?.isLoadMore ?? false,
                isRefresh: state?.isRefresh ?? false,
                films: state?.films ?? [],
                totalFilms: state?.totalFilms ?? 0,
                totalPages: state?.totalPages ?? 0,
                loadmore,
                refresh,
            }}
        >
            {props?.children}
        </Context.Provider>
    )
}

export default GlobalSate