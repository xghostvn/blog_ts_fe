
import { Form, Input, Button } from "antd"
import { useNavigate } from "react-router-dom";
import _ from "lodash"
import "./index.css"
import { RegisterData } from "../../reducers/auth";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { register } from "../../reducers/auth";
const Register = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const redirectLoginPage = ()=> {
        navigate("/login")
    }
    const submit = (values: any) => {
        const data = values as RegisterData
        dispatch((register(_.merge(data, {
            callback : redirectLoginPage
        }))))
    }
    return (
        <>
            <Form form={form}
                onFinish={submit}
                layout="vertical"
                className="w-100 p-3 m-auto"
            >
                <Form.Item label="Name" name={"name"} rules={[{
                    required: true,
                }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name={"email"} rules={[{
                    required: true
                }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name={"password"} rules={[
                    {
                        required: true
                    },
                    {
                        min: 6
                    },
                    {
                        max : 50
                    }

                ]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item label="Password Confirmation" name={"password_confirmation"} rules={[
                    {
                        required: true
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                ]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item className="text-center">
                    <Button type="primary" className="w-100" htmlType="submit">
                        Register
                    </Button>
                    <span className="text-primary d-block my-3 pe-auto" onClick={redirectLoginPage}><u>Already have a account ?</u></span>
                </Form.Item>
            </Form>
        </>

    );
}


export default Register