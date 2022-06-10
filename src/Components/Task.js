import React from 'react'
import { useDispatch } from "react-redux"
import { completeTask,deleteTask } from "../Actions/taskActions"
import EditTask from "./EditTask"

const Task = ({el}) => {
  const dispatch = useDispatch();
  return (
      <div className="task">
          <h4 className={el.isDone ? "Done" : "none"}>{el.description}</h4>
          <div className="d-flex justify-content-between"> 
           <button type="button" class="btn btn-outline-danger btn-space" onClick={() => dispatch(deleteTask(el.id))}>delete</button>
           <button type="button" class="btn btn-outline-primary btn-space" onClick={() => dispatch(completeTask(el.id))}>complete</button> 
           <EditTask tsk={el} />
          </div>
      </div>
  )
}

export default Task


