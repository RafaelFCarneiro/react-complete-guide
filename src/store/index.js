import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter'
import authCounter from './auth';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authCounter,
  },
});

export default store;
