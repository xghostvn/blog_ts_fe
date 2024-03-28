import _ from "lodash"
import axios, { AxiosError } from "axios"
import { METHODS, BASE_API} from "./api"

type REQUEST_OPT = {
    method : string
}

export interface RESPONSE_API  {
    data? : any,
    statusCode : number,
    message? : string,
    isSuccess : boolean
}


// const request = {
//     call : async (options = {}) => {
//         try {
//             const response = await axios(_.merge({
//                 baseURL : BASE_API,
//                 timeout : 600000,
                
//             }, options))
            
//             return  {
//                 data : response.data?.data,
//                 statusCode : response.data?.status_code,
//                 message : response.data?.message,
//                 isSuccess : response.data?.success
//             };
//         }catch(error ) {
//             if(error instanceof AxiosError) {
//                 return {
//                     data : error.response?.data,
//                     statusCode : error.response?.status ?? 500,
//                     isSuccess : false
//                 }
//             }
//             return {
//                 statusCode : 500,
//                 isSuccess : false
//             }
//         }
//     },
//     get : async function(url : string, params = {}, options = {}) {
//         return this.call(_.merge({method : METHODS.GET, url, params}, options))
//     }
// }


const request = () => {
    const call = async (options = {}) => {
        try {
            const response = await axios(_.merge({
                baseURL : BASE_API,
                timeout : 600000,
                withCredentials : true
            }, options))
          
            return  {
                data : response.data?.data,
                statusCode : response.data?.status_code,
                message : response.data?.message,
                isSuccess : response.data?.success
            };
        }catch(error ) {
            console.log(error, "error")
            if(error instanceof AxiosError) {
                return {
                    statusCode : error.response?.status ?? 500,
                    isSuccess : false,
                    message : error.response?.data.message
                }
            }
            return {
                statusCode : 500,
                isSuccess : false,
                message : "Something went wrong !!!"
            }
        }
    }

    const get = async (url : string, params = {}, options = {}) => {
        return call(_.merge({method : METHODS.GET, url, params}, options))
    }

    const post = async (url : string, data = {}, options = {}) => {
        return call(_.merge({method : METHODS.POST, url, data}, options))
    }


    return {
        getRequest : get,
        postRequest : post
    }
}


export const {getRequest, postRequest} = request()