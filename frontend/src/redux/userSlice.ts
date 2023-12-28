import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { errorHandler } from "../utils/errorHandling";
import { axiosClient } from "../utils/axiosClient";
export type blogs={
  blogImage: {publicId:string, url: string}
  category: string;
  comments: any[]
  content: string;
  likes: any[]
  // owner: "658ae90b94d0c1d41f2359f3"
  title: string;
  _id: any
}
export type userType={
  username:string;
  pfp:{
    publicId:string;
    url:string;
  };
  blogs:blogs[];
  savedBlogs:blogs[]
}
type data={
  user:userType|null;
  isLoading:boolean
}

const initialState:data = {
  user:null,
  isLoading: false,
};
export const userSignup = createAsyncThunk(
  "user/Signup",
  async (
    body: { username: string; email: string; password: string; pfp: any },
    thunkAPI
  ) => {
    try {
      const resp = await axios.post("http://localhost:4000/user/signup", body);
      if (resp.data.statusCode != 200) {
        errorHandler(resp.data.message)
      }
      return resp.data.result
    } catch (e) {
      errorHandler('Server Down!')
      return Promise.reject(e);
    } 
  }
);
export const getUserProfile=createAsyncThunk('user/getUserProfile',async(_,thunkAPI)=>{
  try {
    const resp=await axiosClient.get('/user/getProfile')
    if(resp.data.statusCode!==200){
      errorHandler(resp.data.message)
    }
    return resp.data.result  
    
  } catch (e) {
    errorHandler('Server down!')
    return Promise.reject(e)
  }
})

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignup.fulfilled,(state,action: PayloadAction<{user:{_id:any;}}>) => {
        if(action.payload!=undefined){
          const user=action.payload.user
          localStorage.setItem('userId',user._id)
        }
          
        }
      )
      .addCase(getUserProfile.fulfilled,(state,action:PayloadAction<{user:userType}>)=>{
        if(action.payload!=undefined){
          // console.log(action.payload);
          const user=action.payload.user
          console.log(user);
          
          state.user=user
        }
      })
    
  },
});

export default userSlice.reducer;

export const { setLoading } = userSlice.actions;
