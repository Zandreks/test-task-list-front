import React from "react";
import {connect} from 'react-redux'
import {editSortField,editSortDirection} from '../redux/actions/actions'
import { Select } from 'antd';
const { Option } = Select;


const SortTable = ({editSortDirection,editSortField,sort_field,sort_direction})=>{
    const changeSortField = (value) => {
       editSortField(value)
    }
    const changeSortDirection = (value) => {
        editSortDirection(value)
    }
    return(
        <div>
        Сортировка по полю <Select defaultValue={sort_field} style={{ width: 120 }} onChange={changeSortField}>
            <Option value="id">Id</Option>
            <Option value="username">Имя пользователя</Option>
            <Option value="email">
                Email
            </Option>
            <Option value="status">Статус</Option>
        </Select>
            и по  <Select defaultValue={sort_direction} style={{ width: 120 }} onChange={changeSortDirection}>
            <Option value="asc">Возрастанию</Option>
            <Option value="desc">Убыванию</Option>
        </Select>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        sort_field: state.store.sort_field,
        sort_direction: state.store.sort_direction,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        editSortField: (data) => dispatch(editSortField(data)),
        editSortDirection: (data) => dispatch(editSortDirection(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortTable)

