import Axios from "./Axios";
import { DISCOVER_URL } from "./common";

const processResponse = (promise: Promise<any>) => {
    return promise.then(response => ({ ...response?.data })).catch(error => ({ error }))
}


/**
 * 
 * @param page current page
 */
export const loadFilmsWithPage = (page: number) => {
    return processResponse(Axios.get(`${DISCOVER_URL}?api_key=26763d7bf2e94098192e629eb975dab0&page=${page}&fbclid=IwAR2uS314iross8yr6GeQkpDf1pVL14HXRQV4VinzsZI42G8WIJws1K8sAc4`))
}
