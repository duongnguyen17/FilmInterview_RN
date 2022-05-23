import { Dimensions } from "react-native"
import { RESOURCE_URL } from "../api/common"
const { width, height } = Dimensions.get("screen")

/**
 * calculate dimention - use for multiscreen
 * @param percent ratio to screen
 * @param orient orientation 'vertical' | 'horizontal'
 * @returns  dimention
 */
export const calDimen = (percent: number, orient: 'vertical' | 'horizontal'): number => {
    return orient == 'vertical' ? percent * height : percent * width
}

/**
 * get uri of film
 * @param nameFile name of file image
 * @param id id of film
 * @returns string uri
 */
export const getUriImageFilm = (nameFile: string, id: number) => {
    return `${RESOURCE_URL}/t/p/w500${nameFile}`
}