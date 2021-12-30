import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offerError: '',
  offerAdded: {},
  offers: [],
  getHistory: []
};

export const offerSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAddOffer: (state, action) => {
      state.offerAdded = action.payload.offer
    },
    
    offerUpdate: (state, action) => {
      state.id = action.payload.id;
      state.location = action.payload.location;
      state.destination = action.payload.destination;
      state.price = action.payload.price;
    },

    errorInOffer: (state, action) => {
      state.offerError = action.payload.offerError;
    },
    displayOffer: (state, action) => {
      state.offers = action.payload.offersFromDatabase
    },
    displayHistory: (state, action) => {
      state.getHistory = action.payload.historyFromDatabase
    }
  }
});

export const { setAddOffer, offerUpdate, displayOffer, errorInOffer, displayHistory } = offerSlice.actions;
export default offerSlice.reducer;
