import React from "react";
import {Form, Input, Button} from 'antd';
import User from "../Controllers/User";
import { useHistory } from "react-router-dom";

const layout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 12,
    },
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LoginPage = ()=>{
    let history = useHistory()

    const onFinish = async (values) => {
        const formData = new FormData()
        formData.append("username",values.username)
        formData.append("password",values.password)
        const userController = new User()
        let res = await userController.signIn(formData)
        if (!!res) {
            form.resetFields();
            localStorage.setItem("key",res.token)
            history.push("/");
        }
    };
    const [form] = Form.useForm();

    return(
        <div>
            <Form
                {...layout}
                name="addTask"
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Имя пользователя"
                    name="username"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                       Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default LoginPage
