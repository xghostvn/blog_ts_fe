import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {postRequest, getRequest} from "../api/requestPlugin";
import { API_LOGIN, API_ME } from "../api/api";
import _ from "lodash"
import { NotificationSuccess, NotificationError } from "../Utils";
import { RootState } from "../store";
import {redirect} from "react-router-dom"
import { Navigate } from "react-router-dom";
type AuthState =  {
    user : any,
    loading : boolean
}

const initialState : AuthState = {
    user : {},
    loading : false
}

export type UnionSoN = string | number

export type LoginData  = {
    email : UnionSoN,
    password : UnionSoN
}

export type RegisterData = LoginData & {
    password_confirmation : UnionSoN,
    email : UnionSoN
}

export const LOGIN_ACTION = "auth/login"

export const ME_ACTION = "auth/me"

export const login = createAsyncThunk(LOGIN_ACTION, async (data : (LoginData), thunkApi) => {
    const response = await postRequest(API_LOGIN, data)
    if(response.isSuccess) {
        return response
    }
    return thunkApi.rejectWithValue(response.message)
})

export const fetchMe = createAsyncThunk(ME_ACTION, async (_, thunkApi) => {
    const response = await getRequest(API_ME)
    if(response.isSuccess) {
        return response
    }
    return thunkApi.rejectWithValue(response.message)
})


export const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setUser : (state, action : PayloadAction<any>) => {
            state.user = action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(login.pending, (state, action) => {
             state.loading = true
        }) 
        builder.addCase(login.fulfilled , (state, action) => {
            const response  = action.payload
            state.loading = false
            if(response.isSuccess) {
                NotificationSuccess(response.message)
                state.user = response.data
               
            }
            else NotificationError(response.message)
          
        })
        builder.addCase(login.rejected , (state, action) => {
            state.loading = false;
            NotificationError(action.payload as string)
        })

        builder.addCase(fetchMe.pending, (state, action) => {

        })

        builder.addCase(fetchMe.fulfilled, (state, action) => {
            const response = action.payload
            state.user = response.data
        })

        builder.addCase(fetchMe.rejected, (state, action) => {
            state.user = {}
            NotificationError("Your Session expired . Please Login again")
        })
    }
    
})

export const {setUser} = AuthSlice.actions
// export const {increment, decrement, incrementByAmount} = AuthSlice.actions

export const getAuthState = (state:RootState) => state.auth

export default AuthSlice.reducer

