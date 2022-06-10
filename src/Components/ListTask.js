import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const listOfTasks = useSelector(state => state.taskReducer.task);
    const [filterInput, setFilterInput] = useState('all')
    return (
        <div> 
                <button className="button" onClick={() => setFilterInput('done')}>done</button>
                <button className="button" onClick={() => setFilterInput('undone')}>undone</button>
                <button className="button"onClick={() => setFilterInput('all')}>all</button>
        
        <div className="todo-list">
            {   filterInput === 'all' ? listOfTasks.map((el, index) => <Task el={el} key={index}/>)
                : filterInput === 'done' ? listOfTasks.filter(el => el.isDone===true).map((el, index) => <Task el={el} key={index} />)
                : filterInput === 'undone' ? listOfTasks.filter(el => el.isDone===false).map((el, index) => <Task el={el} key={index} />)
                : null
            }
        </div>
        </div>
    )
}
export default ListTask