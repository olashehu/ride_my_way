import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authslice';
import driverSlice from './reducers/driverSlice';
import offerSlice from './reducers/offerSlice';

export const  store = configureStore({
  reducer: {
    auth:authSlice,
    driverAuth: driverSlice,
    offer: offerSlice
  }
})