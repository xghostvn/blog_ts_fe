
export const BASE_API = process.env.REACT_APP_BASE_API


const PREFIX_API = "/api"

//auth
export const API_LOGIN =  PREFIX_API + "/auth/login"
export const API_ME =  PREFIX_API + "/auth/me"
export const API_REGISTER = PREFIX_API +  "/auth/register"


//todo
export const API_CREATE_TODO = PREFIX_API + "/todo"
export const API_LIST_TODO = PREFIX_API + "/todo"
export const API_ASSIGN_MYSELF_TODO = PREFIX_API + "/todo/assignToSelf"

export const METHODS = {
    GET : "GET",
    POST : "POST",
    PUT : "PUT",
    PATCH : "PATCH",
    DELETE : "DELETE"
}