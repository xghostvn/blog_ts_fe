import { redirect, useNavigate, Link} from "react-router-dom";
import { Flex, Layout, Menu } from "antd"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React, { useEffect } from "react"
const { Header, Content, Sider } = Layout


const icons = [
    UserOutlined, LaptopOutlined, NotificationOutlined
]

const SidebarMenu: MenuProps["items"] = [
    {
        label: (
            <Link to={"/todo"}>
                Todo
            </Link>
        ),
        key: "/todo"
    },
    {
        label: (
            <Link to={"/statefull"}>
                StateFull
            </Link>
        ),
        key: "/statefull"
    },
    {
        label: (
            <Link to={"/stateless"}>
                StateLess
            </Link>
        ),
        key: "/stateless"
    },
    {

        label : (
            <Link to={"/login"}>
                Login
            </Link>
        ),
        key : "/login"
    }
];


const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                    children: new Array(2).fill(null).map((_, j) => {
                        return {
                            key: subKey,
                            label: `option${subKey}`,
                        }
                    })
                };
            }),
        };
    },
);



const AppSideBar = () => {
    useEffect(() => {
        console.log("sidebar moutned")

        return () => {
            console.log("sidebar unmounted")
        }
    })
    return (
        <Sider>
            <Menu
                mode="inline"
                theme="dark"
                items={SidebarMenu}
            >

            </Menu>
        </Sider>
    );
}



export default React.memo(AppSideBar)