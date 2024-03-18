import { Middleware, PayloadAction } from "@reduxjs/toolkit"
import { useAppDispatch } from "../hooks"
import { fetchMe } from "../reducers/auth"

const AuthMiddleware = async () => {
  console.log("loading main layout")

}

export default AuthMiddleware