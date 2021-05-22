import React, {useEffect} from "react";
import {Form, Input, Button, Select,message} from 'antd';
import Task from "../Controllers/Task";
import {connect} from 'react-redux'
import {editSelectedTask} from "../redux/actions/actions";
const { Option } = Select;

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
const EditTask = ({getTaskList,statusTaskList,selectedTask,editSelectedTask })=>{
    const onFinish = async (values) => {
        const {username,email,text,status} = selectedTask
        const formData = new FormData()

        if (username !== values.username || email !== values.email || text !== values.text){
            if (status === 0){
                formData.append("status",1)
            }
           else if (status === 10){
                formData.append("status",11)
            }
        }else {
            formData.append("status", values.status)
        }
        formData.append("username",values.username)
        formData.append("email",values.email)
        formData.append("text",values.text)
        const taskController = new Task()
        let res = await taskController.editTask(formData,selectedTask.id)
        if (!!res) {
            form.resetFields()
            editSelectedTask({})
            message.success("Задача успешно изменена")
            getTaskList()
        }
    };
    const [form] = Form.useForm();
    const editForm = () =>{
        const {username,email,text,status} = selectedTask
        form.setFieldsValue({
            username,
            email,
            text,
            status
        })
    }
    useEffect(()=>{
        editForm()
    },[selectedTask])
    return(
        <div>
            <Form
                {...layout}
                name="editTask"
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

                <Form.Item
                    label="Статус"
                    name="status"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Select>
                        {statusTaskList.map(el=><Option key={el.value} value={el.value}>
                            {el.name}
                        </Option>)}

                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" disabled={Object.keys(selectedTask).length!==0?false:true} htmlType="submit">
                        Сохрпнить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        statusTaskList: state.store.statusTaskList,
        selectedTask: state.store.selectedTask
    }
}
function mapDispatchToProps(dispatch) {
    return {
        editSelectedTask: (data) => dispatch(editSelectedTask(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask)
