

export const addTask = (newTask) => ({
    type: 'ADD_TASK',
    payload: newTask
})

export const deleteTask = (idTask) => ({
    type: 'DELETE_TASK',
    payload: idTask
})

export const completeTask = (idTask) => ({
    type: 'COMPLETE_TASK',
    payload: idTask
})

export const editTask = (idTask, value) => ({
    type: 'EDIT_TASK',
    payload: { idTask, value }
})
