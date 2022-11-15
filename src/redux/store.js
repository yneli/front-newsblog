import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice.js';
import {newsReducer} from './slices/newsSlice.js';
import { commentReducer } from './slices/commentSlice.js';
import { msgReducer } from './slices/msgSlice.js';

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
    comment: commentReducer,
    msg: msgReducer,
  },

})

export default store