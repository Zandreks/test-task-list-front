import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {addTaskList, editPage, editSelectedTask} from '../redux/actions/actions'
import {Button, Table} from "antd";
import Task from "../Controllers/Task";
import SortTable from "../Components/SortTable";
import AddTask from "../Components/AddTask";
import EditTask from "../Components/EditTask";

const HomePage = ({statusTaskList, sort_field, sort_direction, page, addTaskList, taskList, editPage, user,editSelectedTask}) => {
    const columns = [
        {
            title: 'Имя пользователя',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Задача',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (text) => {
                const find = statusTaskList.find(el => el.value === text)
                if (!!find) {
                    return find.name
                } else {
                    return ""
                }
            }
        },
        {
            title: '',
            dataIndex: '',
            key: 'action',
            render: (text, row) => {
                if (Object.keys(user).length !== 0) {
                    return <Button onClick={()=>editSelectedTask(row)} type={'primary'}>Редактировать </Button>
                }else {
                    return ""
                }
            }
        },
    ];
    let getTaskList = async () => {
        const taskController = new Task()
        let res = await taskController.getTaskList(sort_field, sort_direction, page)
        if (!!res) {
            addTaskList(res)
        }
    }
    let onChangePage = (pageNumber) => {
        editPage(pageNumber)
    }
    useEffect(() => {
        getTaskList()
    }, [sort_direction, sort_field, page])
    return (
        <div>
            <AddTask getTaskList={getTaskList}/>
            <SortTable/>
            <Table pagination={{
                defaultPageSize: 3,
                current: page,
                total: taskList.total_task_count,
                onChange: onChangePage
            }} dataSource={taskList.tasks} columns={columns}/>
            {Object.keys(user).length !== 0 ?<EditTask getTaskList={getTaskList} />:null}

        </div>
    )
}

function mapStateToProps(state) {
    return {
        statusTaskList: state.store.statusTaskList,
        taskList: state.store.taskList,
        sort_field: state.store.sort_field,
        sort_direction: state.store.sort_direction,
        page: state.store.page,
        user: state.store.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTaskList: (data) => dispatch(addTaskList(data)),
        editPage: (data) => dispatch(editPage(data)),
        editSelectedTask: (data) => dispatch(editSelectedTask(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
