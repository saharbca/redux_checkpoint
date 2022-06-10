import {ADD_TASK,DELETE_TASK,COMPLETE_TASK,EDIT_TASK} from '../Actions/types'
const initialState ={
    task: [
        {
            id: Math.random(),
            description: 'description1',
            isDone: false
        },
        {
            id: Math.random(),
            description: 'description2',
            isDone: true
        },
        {
            id: Math.random(),
            description: 'description3',
            isDone: true,
        },
        {
            id: Math.random(),
            description: 'description4',
            isDone: true,
        }
    ]
}
const taskReducer=(state=initialState,action)=>{
    switch(action.type)
    {   case ADD_TASK:
            return {...state,task:[...state.task,action.payload],}
        case DELETE_TASK:
            return { ...state, task: state.task.filter(el => el.id !== action.payload) }
        case COMPLETE_TASK:
            return { ...state, task: state.task.map(el => (el.id === action.payload) ? { ...el, isDone: !el.isDone } : el) }
        case EDIT_TASK:
            return { ...state, task: state.task.map(el => (el.id === action.payload.idTask) ? { ...el, task: action.payload.value } : el) }
        default:
                return state;
        }    
}
export default taskReducer