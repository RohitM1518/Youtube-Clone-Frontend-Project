import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentVideo: null,
    loading: false,
    error: false,
}

export const videoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true
        },
        fetchSuccess: (state, action) => {
            state.loading = false
        },
        fetchFailure: (state) => {
            state.loading = false
            state.error = true
        },
    
    },
})

// Action creators are generated for each case reducer function
export const { fetchStart, fetchFailure, fetchSuccess,  } = videoSlice.actions

export default videoSlice.reducer