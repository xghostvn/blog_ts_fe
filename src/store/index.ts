import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

import { AuthSlice } from "../reducers/auth";
import todoReducer from "../reducers/todo"
import exampleReducer from "../reducers/example"



const store = configureStore({
    reducer : {
        auth : AuthSlice.reducer,
        todo : todoReducer,
        example : exampleReducer
    },
    middleware : (getDefaultMiddleware) => {
      
       return getDefaultMiddleware()
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
