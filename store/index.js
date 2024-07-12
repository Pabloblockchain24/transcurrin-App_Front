import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query/react';

import authReducer from "../features/authSlice"
import ctrReducer from "../features/ctrSlice"
import {appServicesApi} from "../services/appServices"
import { authApi } from "../services/authServices"

export const store =  configureStore({
    reducer: {
        auth: authReducer,
        ctrSearch: ctrReducer,
        [appServicesApi.reducerPath]: appServicesApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appServicesApi.middleware,authApi.middleware) 

})

setupListeners(store.dispatch)