import { Form, Input, Button, Layout } from "antd";
import { login, LoginData , getAuthState} from "../../reducers/auth";
import { useAppDispatch, useAppSelector } from "../../hooks";
import _ from "lodash"
const Login = () => {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm()
    const authState = useAppSelector(getAuthState)
    const submit = (values: any) => {
        // axios.post("http://blog_service.com/api/auth/login", values, {
        //     withCredentials: true,
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        // }).then(e => {
        //     api?.api.error({
        //         message: "Login Successful !!!",
        //         icon: <SmileOutlined style={{ color: '#108ee9' }} />
        //     })
            

        // }).catch(e => {
        //     api?.api.error({
        //         message: e.response.data.error_msg,
        //         icon: <SmileOutlined style={{ color: '#108ee9' }} />
        //     })
        // })
        dispatch(login(_.merge(values as LoginData)))
    }
    return (
        <Form form={form}
            onFinish={submit}
            layout="vertical"
            style={{
                margin: "auto"
            }}
            className="w-25 py-3"
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
                <Button type="primary" htmlType="submit" disabled={authState.loading}>
                    Login
                </Button>
            </Form.Item>
        </Form>


    );
}


export default Login