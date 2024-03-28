

declare type User = {
    id : number | string,
    name : string | number,
    email ? : string 
}


declare type Todo = {
    id : number | string
    name : string,
    status : number,
    end_time? : string,
    start_time? : string,
    created_by : User,
    user ? : User | null,
    assign_by ? : User | null
}