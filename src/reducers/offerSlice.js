import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        isOfferCreated: false,
        id: '',
        location: '',
        destination: '',
        price: '',
        offerError: ''
    };

    export const offerSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        addOffer:(state, action) => {
            state.isOfferCreated = true
            state.id = action.payload.id
            state.location = action.payload.location
            state.destination = action.payload.destination
            state.price = action.payload.price
        },
        
        errorInOffer: (state, action) => {
            state.offerError = action.payload.offerError
        },

        deleteOffer: (state, action) => {
            
        }
    }
});

export const { addOffer, errorInOffer } = offerSlice.actions
export default offerSlice.reducer