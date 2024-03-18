import { configureStore } from "@reduxjs/toolkit";

import { AuthSlice } from "../reducers/auth";
import todoReducer from "../reducers/todo"

const store = configureStore({
    reducer : {
        auth : AuthSlice.reducer,
        todo : todoReducer
    },
    middleware : (getDefaultMiddleware) => {
      
       return getDefaultMiddleware()
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
