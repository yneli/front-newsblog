import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";



export const fetchNews = createAsyncThunk('news/fetchNewsData', async (params) => {
    const { data } = await axios.get("news");
    return data
});

export const fetchAddInput = createAsyncThunk('news/fetchNewsData', async (params) => {

    const word = {text:params}
    const { data } = await axios.post("news",word);
    return data
})




const initialState = {
        newsData:[],
        status:'loading' 
    };

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
    extraReducers: {
    
    [fetchAddInput.pending]: (state, action) => {
        state.status = 'loading';
        
    },
    [fetchAddInput.fulfilled]: (state, action) => {
        state.newsData = action.payload.newData.articles;
        state.status = 'loaded';

    },
    [fetchAddInput.rejected]: (state, action) => {
        state.status = 'error';
        


}
    }})

    




  
export const newsReducer = newsSlice.reducer;