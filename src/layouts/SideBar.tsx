import { Link } from "react-router-dom";
import { Menu } from "antd"
import { AppleOutlined, OrderedListOutlined, FolderOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React, { useEffect } from "react"
import "./css/sidebar.scss"
const SidebarMenu: MenuProps["items"] = [
    {
        label: "Todo",
        key: "todo",
        icon: <OrderedListOutlined />,
        children: [
            {

                label: (
                    <Link to={"/todo"} className="text-decoration-none">
                        Create Todo
                    </Link>
                ),
                key: "Create todo",
                icon: <FolderOutlined />
            },
            {
                key: "List todo",
                label: (
                    <Link to={"/todo"} className="text-decoration-none">
                        List Todo
                    </Link>
                ),
                icon: <FolderOutlined />
            },
        ]
    },
    {
        label: (
            <Link to={"/statefull"} className="text-decoration-none">
                StateFull
            </Link>
        ),
        key: "/statefull"
    },
    {
        label: (
            <Link to={"/stateless"} className="text-decoration-none">
                StateLess
            </Link>
        ),
        key: "/stateless"
    },
    {
        label: (
            <Link to={"/practice-boostrap"} className="text-decoration-none">
                Practice bootstrap
            </Link>
        ),
        key: "/practice-bootstrap"
    }
];
const AppSideBar = () => {
    useEffect(() => {
        console.log("sidebar moutned")

        return () => {
            console.log("sidebar unmounted")
        }
    })
    return (
        <div className="container-fluid p-0 m-0 sidebar h-100">
            <p className="text-white text-center text-white header_side_bar px-2">
                <AppleOutlined className="mx-2 my-4"/>
                <Link to={"/"} className="text-decoration-none text-white">
                    WebService
                </Link>
            </p>
            <Menu
                mode="inline"
                theme="dark"
                items={SidebarMenu}
            >
            </Menu>
        </div>
    );
}



export default React.memo(AppSideBar)