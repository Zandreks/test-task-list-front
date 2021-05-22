import React, {useEffect} from 'react'
import {Layout, Menu} from 'antd';
import {connect} from 'react-redux'
import {autchUser, addStatusList} from '../redux/actions/actions'
import User from "../Controllers/User";
import Task from "../Controllers/Task";
import {Link} from "react-router-dom";

const {Header, Content, Footer} = Layout;

const LayoutVue = ({children, autchUser,addStatusList, user}) => {
    const chekAutchUser = async () => {
        if (localStorage.getItem('key') !== null) {
            const userController = new User()
            let res = await userController.getUserObject()
            if (!!res) {
                autchUser(res)
            } else {
                autchUser({})
            }
        }
    }
    const getStatusTaskList = async ()=>{
        const taskController = new Task()
        let res = await taskController.getStatusTaskList()
        if (!!res) {
            addStatusList(res)
        }
    }
    useEffect(() => {
        chekAutchUser().then()
        getStatusTaskList().then()
    }, [localStorage.getItem('key')])
    const logout = ()=>{
        localStorage.removeItem('key')
        autchUser({})
    }
    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    {Object.keys(user).length === 0?<Menu.Item key="1">
                        <Link to={"/login"}>
                            Войти
                        </Link>
                    </Menu.Item>:<Menu.Item onClick={logout} key="2">
                        Выйти
                    </Menu.Item>}
                </Menu>
            </Header>

            <Content style={{padding: '0 50px'}}>
                <div className="user-info">
                    {user.name} {user.surname}
                </div>
                <div className="site-layout-content">{children}</div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Task list </Footer>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        user: state.store.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autchUser: (data) => dispatch(autchUser(data)),
        addStatusList: (data) => dispatch(addStatusList(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutVue)
