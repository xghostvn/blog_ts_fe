import { Flex } from "antd"
import { Outlet, useNavigate } from "react-router-dom"
import background from "../assets/images/bg2.jpg"
import _ from "lodash"
import { useQuery } from "@tanstack/react-query"
import { fetchMe } from "../reducers/auth"

const AuthLayout = () => {
    const navigate = useNavigate()
    const { isSuccess } = useQuery({
        queryKey: ["user"],
        queryFn: fetchMe,
        refetchOnWindowFocus: false,
        retry: false,
    })
    if (isSuccess) {
        navigate("/todo")
    }
    return (
        <Flex gap="middle" justify="center" align={"center"} style={{
            height: "inherit",
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className="container-fluid align-items-center justify-content-center d-flex flex-column">
                <div className="col-sm-8 col-lg-6 col-12 col-md-6 col-xl-3">
                    <Outlet />
                </div>
            </div>
        </Flex>

    )
}

export default AuthLayout