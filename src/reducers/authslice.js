import { createSlice } from "@reduxjs/toolkit";
const initialState = {
        isAuthenticated: false,
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        userError: ''
    };
export const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setCurrentUser:(state, action) => {
            state.isAuthenticated = true
            state.id = action.payload.id
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
        },
        // updateCurrentUser:(state, action) => {
        //     state.id = action.payload
        //     state.firstName = action.payload
        //     state.lastName = action.payload
        // },
        
        userLogout:(state) => {
            state.isAuthenticated = false
            state.id = ""
            state.firstName = ''
            state.lastName = ''
            state.email = ""
        },
        userLoggedIn: (state, action) => {
            state.isAuthenticated = true
            state.id = action.payload.id
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
        },
        signupError: (state, action) => {
            state.userError = action.payload.userError
        },
    }
});

export const { setCurrentUser,userLogout, userLoggedIn, signupError, updateCurrentUser } = authSlice.actions
export default authSlice.reducer
