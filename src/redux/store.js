import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice.js';
import {newsReducer} from './slices/newsSlice.js';
import { commentReducer } from './slices/commentSlice.js';

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
    comment: commentReducer,
  },

})

export default store