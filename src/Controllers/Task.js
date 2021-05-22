import axios from "axios";
import {message} from "antd";

class Task{
    getStatusTaskList = async ()=>{
        try {
            const res = await axios.get('/api/rest/task/status/',{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (res.status === 200){
                return res.data.message
            }
        }catch (e){
            if (!!e.response.data){
                message.error(e.response.data.message.message)
            }
        }
    }
    getTaskList = async (sort_field,sort_direction,page)=>{
        try {
            const res = await axios.get(`/api/rest/task/?sort_field=${sort_field}&sort_direction=${sort_direction}&page=${page}`,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (res.status === 200){
                return res.data.message
            }
        }catch (e){
            if (!!e.response.data){
                message.error(e.response.data.message.message)
            }
        }
    }
    addTask = async (body)=>{
        try {
            const res = await axios.post("/api/rest/task/crate", body,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (res.status === 200){
                return res.data.message
            }
        }catch (e){
            if (!!e.response.data){
                if(e.response.data.message.username){
                    message.error(e.response.data.message.username)
                }
                if(e.response.data.message.email){
                    message.error(e.response.data.message.email)
                }
                if(e.response.data.message.text){
                    message.error(e.response.data.message.text)
                }
                if(e.response.data.message.status){
                    message.error(e.response.data.message.status)
                }
                if(e.response.data.message.message){
                    message.error(e.response.data.message.message)
                }
            }
        }
    }
    editTask = async (body,id)=>{
        try {
            const res = await axios.post(`/api/rest/task/edit/${id}`, body,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "token":localStorage.getItem('key')

                }
            })
            if (res.status === 200){
                return res.data.status
            }
        }catch (e){
            if (!!e.response.data){
                if(e.response.data.message.username){
                    message.error(e.response.data.message.username)
                }
                if(e.response.data.message.email){
                    message.error(e.response.data.message.email)
                }
                if(e.response.data.message.text){
                    message.error(e.response.data.message.text)
                }
                if(e.response.data.message.status){
                    message.error(e.response.data.message.status)
                }
                if(e.response.data.message.message){
                    message.error(e.response.data.message.message)
                }
            }
        }
    }

}
export default Task
