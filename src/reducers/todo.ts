import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";


export type Todo = {
    name : string,
    status : "pending" | "finish" | "fail" | "open",
}


const initialState : Todo[] = []


const todoSlice = createSlice({
    name :"todos",
    initialState : initialState,
    reducers : {
        addTodo : (state, action : PayloadAction<Todo>) => {
             state.push(action.payload)
        },
        removeTodo : (state , action: PayloadAction<Todo>) => {
            let index = state.findIndex(item => item.name === action.payload.name)
            state.splice(index, 1)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export const selectTodo = (state : RootState) => state.todo

export default todoSlice.reducer