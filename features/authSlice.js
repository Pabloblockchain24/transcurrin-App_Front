import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {
            user: null
        },
    reducers: {
        setUserAuth: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null;
        }
    }
})

export const { setUserAuth, clearUser } = authSlice.actions
export default authSlice.reducer
