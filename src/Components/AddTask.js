import React from "react";
import {Form, Input, Button, message} from 'antd';
import Task from "../Controllers/Task";
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 10,
    },
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const AddTask = ({getTaskList})=>{
    const onFinish = async (values) => {
        const formData = new FormData()
        formData.append("username",values.username)
        formData.append("email",values.email)
        formData.append("text",values.text)
        const taskController = new Task()
        let res = await taskController.addTask(formData)
        if (!!res) {
            form.resetFields()
            message.success("Задача успешно создана")
            getTaskList()
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
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type:'email'
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Задача"
                    name="text"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>



                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Добавить задачу
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default AddTask
