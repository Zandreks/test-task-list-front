import React from "react";
import {Link} from "react-router-dom";

const NotFound = ()=>{
    return(
        <>
        <h2>
            404 -  страница не найдена
        </h2>
            <Link to={'/'}>На главную</Link>
        </>
    )
}
export default NotFound
