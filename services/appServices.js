import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DATABASE_URL } from "../mongo/database";

export const appServicesApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: DATABASE_URL}),
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => "/intranet"
        })
    })
})

export const { 
    useGetServicesQuery, 
} = appServicesApi;
