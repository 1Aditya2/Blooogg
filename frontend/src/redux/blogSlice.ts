import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../utils/axiosClient";
// export type tasks = {
//   _id: number;
//   task: string;
//   completed: boolean;
// };
// export type other = {
//   itemsLeft: number;
//   isLoading: boolean;
// };
// export type allArray = {
//   todo: tasks[];
//   active: tasks[];
//   completed: tasks[];
// };
// const initialState: allArray & other = {
//   todo: [],
//   active: [],
//   completed: [],
//   itemsLeft: 0,
//   isLoading: false,
// };
export type blogType = {
    _id:any
  blogImage: {
    publicId: string;
    url: string;
  };
  category: string;
  content: string;
  title: string;
  likes: any[];
  owner: {
    pfp: {
        publicId: string;
        url: string;
    };
    username: string;
  };
  comments: [
    {
      commenterId: any;
    },
    {
      comment: string;
    }
  ];
};
export type blogArray = {
  blogs: blogType[];
  isLoading: boolean;
};
const initialState: blogArray = {
  blogs: [],
  isLoading: false,
};

export const getAllBlogs = createAsyncThunk(
  "blog/getAllBlogs",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(
        "http://localhost:4000/userBlogs/getAllBlogs"
      );
      console.log(resp.data.result, "resp at landing");
      return resp.data.result.Blogs;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
export const createBlog=createAsyncThunk('blogs/createBlog',async(body:{title:string;content:string;category:string;blogImage:any},thunkAPI)=>{
  try {
    const resp=await axiosClient.post('/myBlogs/createBlog',body)
    console.log(resp);
    
  } catch (e) {
    return Promise.reject(e)
    
  }
})

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAllBlogs.fulfilled,
      (state, action: PayloadAction<blogType[]>) => {
        console.log(action.payload);
        state.blogs = action.payload;
      }
    );
  },
});

export default blogSlice.reducer;

export const { setLoading } = blogSlice.actions;
