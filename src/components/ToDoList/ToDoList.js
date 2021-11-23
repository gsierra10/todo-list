import { useState, useEffect } from "react"
import store from "../../services/redux/store"


const ToDoList = () => {
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
        setTasks(store.getState().tasks)
        store.subscribe(()=>{
            setTasks(store.getState().tasks)
        })
    }, [])
    return (
        <div>
           {tasks.map((tasks) => 
                <ul>
                    <li type='disc'>{tasks}</li>
                </ul>
            )}
        </div>
    )
}

export default ToDoList
