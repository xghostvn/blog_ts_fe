
import { Form, Input, Button, notification } from "antd"
import axios from "axios"
import { toast } from "react-toastify"
import { SmileOutlined } from '@ant-design/icons';
import { useNotificationContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [form] = Form.useForm()
    const api = useNotificationContext()
    const navigate = useNavigate()
    const register = (values: any) => {
        console.log("1")
        axios.post("http://blog_service.com/api/auth/register", values).then(e => {
            api?.api.success({
                message: 'Register Successful !!!',
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            })
            navigate("/login")
        }).catch(e => {
            // openNotification()
            api?.api.error({
                message: e.response.data.error_msg,
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            })
        })
    }
    return (
        <>
            <Form form={form}
                onFinish={register}
                layout="vertical"
                style={{
                    margin: "auto"
                }}
                className="w-25 py-3"
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

                <Form.Item style={{ textAlign: "center" }}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </>

    );
}


export default Register