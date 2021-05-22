import axios from "axios";
import {message} from "antd";

class User {
    getUserObject = async ()=>{
        try {
            const res = await axios.get('/api/rest/user/',{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "token":localStorage.getItem('key')
                }
            })
            if (res.status === 200){
                return res.data.message.user
            }
        }catch (e){
            localStorage.removeItem('key')
            if (!!e.response.data){
                message.error(e.response.data.message.message)
            }
        }
    }
    signIn = async (body) =>{
        try {
            const res = await axios.post("/api/rest/login", body,{
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
                if(e.response.data.message.message){
                    message.error(e.response.data.message.message)
                }
            }
        }
    }
}
export default User
