import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { RootState } from "../store";

import  { User, a , b} from "./user";

let uuid = uuidv4();

console.log(b)

const user : User = {
    name : "tunglx",
    id : 1
}



console.log("example reducers")

type ExampleType = {
    name: string,
    key: string
}


const initialState: ExampleType[] = [
    {
        name: uuidv4() as string,
        key: uuidv4() as string
    },
    {
        name: uuidv4() as string,
        key: uuidv4() as string
    },
    {
        name: uuidv4() as string,
        key: uuidv4() as string
    },
    {
        name: uuidv4() as string,
        key: uuidv4() as string
    }
]




const exampleSlice = createSlice({
    name: "example",
    initialState: initialState,
    reducers: {
        addExample: (state) => {
            state.push({
                name: uuidv4() as string,
                key: uuidv4() as string
            })
        }
    }
})


export const getExampleState = (state : RootState) => state.example

export const {addExample} = exampleSlice.actions


export default exampleSlice.reducer