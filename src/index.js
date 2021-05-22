import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'moment/locale/ru'
import 'antd/dist/antd.min.css'
import rootReducer from './redux/index'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import {ConfigProvider} from 'antd'
import frFR from 'antd/es/locale/ru_RU'
import reportWebVitals from './reportWebVitals';
import Rotes from "./Components/Route";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        })
        : compose
const loggerMiddleware = () => next => action => {
    const result = next(action)
    return result
}

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk))
)
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider
                locale={frFR}>
                <Rotes/>
            </ConfigProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
