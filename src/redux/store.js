import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice.js';
import {newsReducer} from './slices/newsSlice.js';

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
  },

})

export default store