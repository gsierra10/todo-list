import { useState, useEffect } from "react"
import {store} from "../../services/redux/store"

const ToDoList = () => {
    const [tasks, setTasks] = useState

    useEffect(() => {
        store.subscribe(()=>{
            setTasks(store.getState().tasks)
        })
    }, [])
    return (
        <div>
            <input type='text' onSubmit=''>Agregue su tarea</input>
            <button>Añadir</button>
        </div>
    )
}

export default ToDoList
