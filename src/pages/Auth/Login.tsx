import { Form, Input, Button, Layout } from "antd";
import { login, LoginData, getAuthState, defaultCase } from "../../reducers/auth";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Navigate, useNavigate, redirect } from "react-router-dom";
import _ from "lodash"

import "./index.css"


const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const [form] = Form.useForm()
    console.log("load login PAge")
    const authState = useAppSelector(getAuthState)
    const redirectRegisterPage = () => {
        navigate("/register")
    }

    const submit = (values: any) => {
        dispatch(login(_.merge(values as LoginData)))
        // console.log(authState)
        // dispatch(defaultCase())
    }
    return (
                <Form form={form}
                    onFinish={submit}
                    layout="vertical"
                    className="w-100  m-auto"
                >
                    <Form.Item label="Email" name={"email"} rules={[{
                        required: true
                    }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name={"password"} rules={[
                        {
                            required: true
                        }
                    ]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center" }}>
                        <Button type="primary" htmlType="submit" className="w-100" disabled={authState.loading}>
                            Login
                        </Button>
                        <span className="d-block float-right text-primary pe-auto py-2" onClick={redirectRegisterPage}>
                            <u>Doens't have a account ?</u>
                        </span>
                    </Form.Item>
                </Form>
    );
}


export default Login