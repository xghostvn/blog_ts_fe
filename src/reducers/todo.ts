import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { postRequest, getRequest } from "../api/requestPlugin";
import { API_CREATE_TODO, API_LIST_TODO } from "../api/api";
const initialState  : {
    list : Todo[],
} = {
    list : []
}


export const fetchTodo = async () => {
    const response = await getRequest(API_LIST_TODO)
    if (!response.isSuccess) {
        throw new Error("Failed to fetch Me")
    }
    console.log("response", response)
    return response
}

export const createTodo = async (data : Omit<Todo, "created_by" | "id">) => {
    const response = await postRequest(API_CREATE_TODO, data)
    if (!response.isSuccess) {
        throw new Error("Failed to fetch Me")
    }
    return response
}

const todoSlice = createSlice({
    name :"todos",
    initialState : initialState,
    reducers : {
        setListTodo : (state, action : PayloadAction<Todo[]>) => {
            state.list = action.payload
        }
    }
})

export const {setListTodo} = todoSlice.actions

export const selectTodo = (state : RootState) => state.todo.list

export default todoSlice.reducer