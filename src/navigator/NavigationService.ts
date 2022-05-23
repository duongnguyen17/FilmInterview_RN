import { CommonActions, NavigationContainerRef } from '@react-navigation/native'
import React from 'react'
import { NavigationServiceConfig } from '../type'

/**
 * config of NavigationService
 */
const config: NavigationServiceConfig = {}

export const setNavigator = (nav: React.MutableRefObject<NavigationContainerRef<ReactNavigation.RootParamList> | undefined>) => {
    if (nav.current) {
        config.navigator = nav.current
    }
}

/**
 * navigate to new route
 * @param routeName next route
 * @param params 
 */
export const navigateTo = (routeName: string, params?: object) => {
    if (config.navigator && routeName) {
        let action = CommonActions.navigate({ name: routeName, params })
        config.navigator.dispatch(action)
    }
}

/**
 * back to previous screen
 */
export const goBack = () => {
    if (config.navigator) {
        let action = CommonActions.goBack()
        config.navigator.dispatch(action)
    }
}