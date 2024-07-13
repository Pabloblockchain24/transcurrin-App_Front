import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATABASE_URL } from "../mongo/database";

const baseQuery = fetchBaseQuery({
    baseUrl: DATABASE_URL,
    prepareHeaders: async (headers, { getState }) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

export const appServicesApi = createApi({
    reducerPath: "appServicesApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => {
                return {
                    url: "/intranet",
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
            },
            transformResponse: (response) => {
                return response
            }
        })
    })
})

export const {
    useGetServicesQuery,
} = appServicesApi;


