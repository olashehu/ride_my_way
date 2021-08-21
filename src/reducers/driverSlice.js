import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    driverError: ''
}

export const driverSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setCurrentDriver:(state, action) => {
            state.isAuthenticated = true
            state.id = action.payload.id
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
        },
        
        driverLogout:(state) => {
            state.isAuthenticated = false
            state.id = ""
            state.firstName = ''
            state.lastName = ''
            state.email = ""
        },
        driverLoggedIn: (state, action) => {
            state.isAuthenticated = true
            state.id = action.payload.id
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
        },
        driverSignupError: (state, action) => {
            state.userError = action.payload.userError
        },
    }
});

export const { setCurrentDriver, driverLogout, driverLoggedIn, driverSignupError } = driverSlice.actions
export default driverSlice.reducer