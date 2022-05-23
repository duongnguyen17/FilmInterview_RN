import { createContext } from "react";
import { Film } from "../type";

export default createContext({
    currentPage: 0,
    isLoadMore: false,
    isRefresh: false,
    films: new Array<Film>(),
    totalFilms: 0,
    totalPages: 0,
    loadmore: () => { },
    refresh: () => { },
})