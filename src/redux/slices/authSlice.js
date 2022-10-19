import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NavigationType } from "react-router-dom";
import axios from "../../axios";



export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (params) => {
    const { data } = await axios.post("auth/login", params);
    return data
});

export const fetchGetMe = createAsyncThunk('auth/fetchGetMe', async (params) => {
    const { data } = await axios.get("auth/me");
    return data
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const { data } = await axios.post('auth/register', params);
    return data
})



const initialState = {
    data: null,
    status: 'loading',
    role: null, 
    page: 'home',
};



const authSlice = createSlice({
name: 'auth',
initialState,
reducers: {
    logOut:(state, action) => {
        state.data = null;
        state.role = null;

    },
    isPage:(state, action) => {
        state.page = action.payload;
    }

},
extraReducers: {

[fetchLogin.pending]: (state, action) => {
    state.status = 'loading';
    state.data = null;
    
},
[fetchLogin.fulfilled]: (state, action) => {
    state.role = action.payload.role
    state.data = action.payload;
    state.status = 'loaded';
    

},
[fetchLogin.rejected]: (state, action) => {
    state.status = 'error';
    state.data = null;
    


},
[fetchGetMe.pending]: (state, action) => {
    state.status = 'loading';
    state.data = null;
    
},
[fetchGetMe.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.role = action.payload.role;
    state.status = 'loaded';

},
[fetchGetMe.rejected]: (state, action) => {
    state.status = 'error';
    state.data = null;
    


},
[fetchRegister.pending]: (state, action) => {
    state.status = 'loading';
    state.data = null;
    
},
[fetchRegister.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.status = 'loaded';

},
[fetchRegister.rejected]: (state, action) => {
    state.status = 'error';
    state.data = null;
    


},

}})




export const selectIsAuth = (state) => Boolean(state.auth.data);
export const selectIsRole = (state) => state.auth.role;


export const authReducer = authSlice.reducer;

export const { logOut, isPage } = authSlice.actions;