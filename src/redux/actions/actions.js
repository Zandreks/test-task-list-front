export function autchUser(data) {
    return {
        type: 'AUTCH-USER',
        data
    }
}
export function addStatusList(data) {
    return {
        type: 'ADD-STATUS-LIST',
        data
    }
}
export function addTaskList(data) {
    return {
        type: 'ADD-TASK-LIST',
        data
    }
}
export function editSortField(data) {
    return {
        type: 'EDIT-SORT-FIELD',
        data
    }
}

export function editSortDirection(data) {
    return {
        type: 'EDIT-SORT-DIRECTION',
        data
    }
}

export function editPage(data) {
    return {
        type: 'EDIT-PAGE',
        data
    }
}

export function editSelectedTask(data) {
    return {
        type: 'EDIT-SELECTED-TASK',
        data
    }
}
