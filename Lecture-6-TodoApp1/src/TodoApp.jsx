import { useState } from "react"
import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, task: 'This is first todo.' }
    ])
    const [invalue, setInvalue] = useState('')
    function handleInput(e) {
        setInvalue(e.target.value)
    }
    function handleAdd(e) {
        e.preventDefault()
        if (invalue === '') {
            alert('Todo can\'t be empty.')
            return
        }
        const newTodo = {
            id: Date.now(),
            task: invalue
        }

        setTodos([...todos, newTodo])
        setInvalue('')
    }
    return (
        <>
            <hr />
            <form onSubmit={handleAdd}>
            <Grid container spacing={2}>
                <Grid size={8}>
                    <TextField value={invalue} onChange={handleInput} fullWidth label="Your Todo Text Here" />
                </Grid>
                <Grid size={4}>
                    
                <Button type="submit" variant="contained">Add Todo</Button>
                </Grid>
            </Grid>
            {/* <form onSubmit={handleAdd}> */}
                {/* <input type="text" value={invalue} onChange={handleInput} /> */}
                {/* <TextField label="Your Todo Text Here" /> */}
                {/* <Button type="submit" variant="contained">Add Todo</Button> */}
            </form>
            {/* <p>{invalue}</p> */}
            <hr />
            <h3>My All Todos:</h3>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo.id} : {todo.task}</li>
                    ))
                }
            </ul>
            <hr />

        </>
    )
}
export default TodoApp