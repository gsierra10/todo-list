import { useState, useEffect } from "react"
import store from "../../services/redux/store"


const ToDoList = () => {
    const [tasks, setTasks] = useState([{'title': 'Aprobar algun proyecto del bootcamp'}])
    

    useEffect(() => {
        store.subscribe(()=>{
            setTasks(store.getState().tasks)
            console.log('State Changed')
        })
    }, [])
    return (
        <div>
           {tasks.map((tasks) => <><h1>{tasks.title}</h1></>)}
        </div>
    )
}

export default ToDoList
