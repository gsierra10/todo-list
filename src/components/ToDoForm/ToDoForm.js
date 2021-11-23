import { useState } from "react"
import store, { ADD_TASKS } from "../../services/redux/store"

const ToDoForm = () => {
    const [tasks, setTasks] = useState([])
 
    const AddTask = (tasks) => {
        store.dispatch({
            type: ADD_TASKS,
            payload: tasks
        });

    }    

    return (
        <>
            {tasks.map((tasks) =>   
                <form  onSubmit={()=>AddTask(tasks)}>
                    <input type='texto' placeholder='Agregue su tarea'>{tasks.title}</input>
                    <button type='onSubmit' >Añadir</button>
                </form>               
            )}
        </>    
    )
}

export default ToDoForm
