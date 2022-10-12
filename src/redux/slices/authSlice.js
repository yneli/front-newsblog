import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "../../axios";
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
};
console.log(initialState.data);

const authSlice = createSlice({
name: 'auth',
initialState,
reducers: {
    logOut:(state, action) => {
        state.data = null;

    }

},
extraReducers: {

[fetchLogin.pending]: (state, action) => {
    state.status = 'loading';
    state.data = null;
    
},
[fetchLogin.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.status = 'loaded';
    console.log(state.date);

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


export const authReducer = authSlice.reducer;

export const { logOut } = authSlice.actions;