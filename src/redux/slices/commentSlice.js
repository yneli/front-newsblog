import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";



export const fetchComment = createAsyncThunk('comment/fetchComment', async ({params,url}) => {
    const obj = {text: params,
    url: url}
    const { data } = await axios.post("comment/create", obj);
    
    return data
});

export const getComment = createAsyncThunk('comment/fetchComment', async (params) => {
    const obj = {url: params}
    const { data } = await axios.post("comment/getComments", obj);
    console.log(data);
    return data
});




const initialState = {
    comment: null,
    status: 'loading',
    
};


const commentSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
    extraReducers: {
    
    [fetchComment.pending]: (state, action) => {
        state.status = 'loading';
        
    },
    [fetchComment.fulfilled]: (state, action) => {
        state.status = 'loaded';

    },
    [fetchComment.rejected]: (state, action) => {
        state.status = 'error';
    },
    [getComment.pending]: (state, action) => {
        state.status = 'loading';
        
    },
    [getComment.fulfilled]: (state, action) => {
        state.comment = action.payload;
        state.status = 'loaded';

    },
    [getComment.rejected]: (state, action) => {
        state.status = 'error';
        


}
    }})



export const commentReducer = commentSlice.reducer;

export const { } = commentSlice.actions;