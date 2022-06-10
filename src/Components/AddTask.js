import React,{useState } from 'react'
import {useDispatch} from "react-redux"
import { addTask } from "../Actions/taskActions"


const AddTask = () => {
    const [Text, setText] = useState("")
    const dispatch = useDispatch()
    const add = () =>{
        dispatch(addTask({id:Math.random(), description:Text, isDone: false}));
        setText("");
    }
    return (
        <div className="add">
        <input type="text" onChange={(e) => setText(e.target.value)} value={Text} />
        <button onClick={add}>add</button>
        </div>
    )
}

export default AddTask