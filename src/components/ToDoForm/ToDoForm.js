import store, { ADD_TASKS } from "../../services/redux/store"

const ToDoForm = () => {

    
    const AddTask =(e) => {
        e.preventDefault()
        store.dispatch({
            type: ADD_TASKS,
            payload: e.target.tasks.value           
        });      
    }    

    return (
        <>  
            <form  onSubmit={(e) =>AddTask(e)}>
                <input 
                    type='texto'
                    name='tasks' 
                    placeholder='Agregue su tarea'>
                        
                </input>
                <button type='onSubmit' >Añadir</button>
            </form>               
        </>    
    )
}


export default ToDoForm
