
import React, {ReactNode, useEffect} from "react";
import {Layout} from "antd"
import AppSideBar from "./SideBar";
import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchMe, getAuthState } from "../reducers/auth";
import _ from "lodash"
const {Header, Content} = Layout
const MainLayout  = () => {
    // const authState = useAppSelector(getAuthState)
    const dispatch = useAppDispatch()
    dispatch(fetchMe())

    useEffect(() => {
        console.log("Main Layout Render")
    }, [])

    // if(_.isEmpty(authState.user)) {
    //     console.log(authState.user)
    //     // return <Navigate to="/login"/>
    // }
    return (
        <Layout style={{ height: "100%" }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
            </Header>
            <Layout>
            <AppSideBar/>
                <Layout>
                    <Content style={{ margin: "16px 16px", width: "100%" }}>
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
      
        </Layout>
    )
}


export default MainLayout