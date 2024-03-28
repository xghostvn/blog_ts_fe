
import { Layout } from "antd"
import AppSideBar from "./SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import _ from "lodash"
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../hooks";
import { setUser } from "../reducers/auth";
import { fetchMe } from "../reducers/auth";
import { useEffect } from "react";
import "./css/main.scss"
const { Header, Content } = Layout
const MainLayout = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { data, isError, isPending, isSuccess } = useQuery({
        queryKey: ["user"],
        queryFn: fetchMe,
        refetchOnWindowFocus: false,
        retry: false,
    })
    if (isError) {
        navigate("/login")
    }
    useEffect(() => {
        if (isSuccess) {
            dispatch(setUser(data))
        }

    }, [isSuccess])

    return (
        <div className="container-fluid d-flex flex-row m-0 p-0 h-100">
            <div className="col-xl-2 col-md-2 h-100">
                    <AppSideBar />
            </div>
            <div className="col-xl-10 p-0 m-0 col-md-10 over_flow_y_scroll">
                <Header className="d-flex text-center">
                    <div className="demo-logo" />
                </Header>
                <Content>
                    {isSuccess ? (<Outlet />) : (<div>Loading ....</div>)}
                </Content>
            </div>
        </div>
    )
}


export default MainLayout