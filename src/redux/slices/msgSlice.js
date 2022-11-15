import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";



export const createRoom = createAsyncThunk('msg/createRoom', async (params) => {
    const obj = {id: params}
    const { data } = await axios.post("msg/createRoom", obj);
    return data
});
export const getFriends = createAsyncThunk('msg/getFriends', async (params) => {
    const { data } = await axios.get("msg/getUsers", params);
    return data
});
export const createMessage = createAsyncThunk('msg/createMessage', async ({text, idRoom}) => {
    const obj = 
    {text: text,
     idRoom: idRoom,
    }
    const { data } = await axios.post("msg/createMsg", obj);
    return data
});
export const getMessage = createAsyncThunk('msg/getMessage', async (idRoom) => {
    const obj = 
    {
     idRoom: idRoom,
    }
    const { data } = await axios.post("msg/msgGet", obj);
    return data
});



const initialState = {
    data: null,
    status: 'loading',
    url: null,
    msgData: null,
};



const msgSlice = createSlice({
name: 'msg',
initialState,
reducers: {
    

},
extraReducers: {


[getFriends.pending]: (state, action) => {
    state.status = 'loading';
    
    
},
[getFriends.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.status = 'loaded';

},




[createRoom.pending]: (state, action) => {
    state.status = 'loading';
    
    
},
[createRoom.fulfilled]: (state, action) => {
    state.url = action.payload;
    state.status = 'loaded';
    console.log(action.payload, "slice22");

},
[createMessage.pending]: (state, action) => {
    state.status = 'loading';
    
    
},
[createMessage.fulfilled]: (state, action) => {
    state.msgData = action.payload;
    state.status = 'loaded';

},
[getMessage.pending]: (state, action) => {
    state.status = 'loading';
    
    
},
[getMessage.fulfilled]: (state, action) => {
    state.msgData = action.payload;
    state.status = 'loaded';

},


}})


export const msgReducer = msgSlice.reducer;

