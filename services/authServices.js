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


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => {
                return {
                    url: "/loginApp",
                    method: "POST",
                    body: credentials,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
            },
            
            transformResponse: (response) => ({
                token: response.data.token,
                name: response.data._doc.name
            }),
            async onQueryStarted({ credentials }, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                     await AsyncStorage.setItem('token', data.token);
                } catch (error) {
                    console.error("Error al guardar el token:", error);
                }
            },
        }),

        register: builder.mutation({
            query: (credentials) => ({
                url: "/register",
                method: "POST",
                body: credentials,
                headers: {
                    'Content-Type': 'application/json',
                }
            })  
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation
} = authApi;
