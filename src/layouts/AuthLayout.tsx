import {  Flex } from "antd"
import { Navigate, Outlet } from "react-router-dom"
import background from "../assets/images/bg2.jpg"
import { useAppSelector } from "../hooks"
import { getAuthState } from "../reducers/auth"
import _ from "lodash"
const AuthLayout = () => {
    // const authState = useAppSelector(getAuthState)

    // if(!_.isEmpty(authState.user)) {
    //    return <Navigate to="/todo"/> 
    // }

    return (
        <Flex gap="middle" justify="center" align={"center"} style={{
            height: "inherit",
            backgroundImage: `url(${background})`
        }}>
            <Outlet />

        </Flex>

    )
}

export default AuthLayout