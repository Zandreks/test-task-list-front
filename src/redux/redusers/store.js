const initialState = {
    user: {},
    statusTaskList: [],
    taskList: {
        tasks:[],
        total_task_count:0
    },
    selectedTask: {},
    sort_field: "id",
    sort_direction: "asc",
    page: 1
}

export default function todos(state = initialState, action) {
    switch (action.type) {
        case 'AUTCH-USER':
            return {
                ...state,
                user: action.data
            }
        case 'ADD-STATUS-LIST':
            return {
                ...state,
                statusTaskList: action.data
            }
        case 'ADD-TASK-LIST':
            return {
                ...state,
                taskList: action.data
            }
        case 'EDIT-SORT-FIELD':
            return {
                ...state,
                sort_field: action.data
            }
        case 'EDIT-SORT-DIRECTION':
            return {
                ...state,
                sort_direction: action.data
            }
        case 'EDIT-PAGE':
            return {
                ...state,
                page: action.data
            }
        case 'EDIT-SELECTED-TASK':
            return {
                ...state,
                selectedTask: action.data
            }
        default:
            return state
    }
}
