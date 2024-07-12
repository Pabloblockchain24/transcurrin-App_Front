import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DATABASE_URL } from "../mongo/database";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: DATABASE_URL }),
    endpoints: (builder) => ({

        login: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
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
