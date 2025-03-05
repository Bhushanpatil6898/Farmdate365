import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: null,
  isAuthenticated: false,
  farmDatas: [],
  billdata: [],
  userdata: [],
  notificationdata:[],
  logsdata:[],
  error: null, // Added error state
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, actions) => {
      const { role, id } = actions.payload;
      state.role = role;
      state.isAuthenticated = true;
      state.id = id;
      state.error = null; 
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.role = null;
      state.id = null;
      state.error = null; // Clear error on logout
    },
    setfarmDatas: (state, actions) => {
      const { data } = actions.payload;
      state.productDatas = data; // Store product data in the state
    },
   
    setUserdata: (state, actions) => {
      const { data } = actions.payload;
      state.userdata= data; // Store bill data in the state
    },
    setNotificationdata: (state, actions) => {
      const { data } = actions.payload;
      state.notificationdata= data;
  },setLogsdata: (state, actions) => {
      const { data } = actions.payload;
      state.logsdata= data; // Store bill data in the state
      console.log(data); 
    },
    
  },
  
});

export const { login, logOut,setUserdata,setNotificationdata,setLogsdata} = authReducer.actions;
export default authReducer.reducer;
