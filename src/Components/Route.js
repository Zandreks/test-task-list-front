import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from "../Pages/NotFound";
import LayoutVue from "./Layout";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

const Rotes = ()=>{
    const LayoutComponent = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props => <LayoutVue><Component /></LayoutVue>}
        />
    )
    return(
        <BrowserRouter>
                <Switch>
                    <LayoutComponent exact path='/' component={()=><HomePage/>}/>
                    <LayoutComponent path='/login' component={()=><LoginPage/>}/>
                    <LayoutComponent  component={()=><NotFound/>}/>

                </Switch>
        </BrowserRouter>
    )
}
export default Rotes
