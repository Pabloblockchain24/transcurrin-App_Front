import { createSlice } from "@reduxjs/toolkit"

export const ctrSlice = createSlice({
    name: "ctr",
    initialState: {
        contenedores:[],
        ctrSelected: "",
        ctrFiltered: ""
    },
    reducers: {
        setCtrSelected: (state, action) => {
            state.ctrSelected = action.payload
        },
        setCtrFiltered: (state, action) => {    
            state.ctrFiltered = action.payload
        }    
    }
})

export const {setCtrSelected, setCtrFiltered } = ctrSlice.actions
export default ctrSlice.reducer
