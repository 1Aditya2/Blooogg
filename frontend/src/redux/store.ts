import {configureStore} from '@reduxjs/toolkit'
// import todoReducer from './todoSlice'
import blogReducer from './blogSlice'
import userReducer from './userSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store=configureStore({
    reducer:{
        // todoReducer
        blogReducer,
        userReducer
    }
})


export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector