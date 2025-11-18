import { useState } from "react"
import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, task: 'This is first todo.', isCompleted: false },
        { id: 2, task: 'This is Second todo.', isCompleted: true },
        { id: 3, task: 'This is Third todo.', isCompleted: false }
    ])
    const [invalue, setInvalue] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editingText, setEditingText] = useState('')
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
            task: invalue,
            isCompleted: false
        }

        setTodos([...todos, newTodo])
        setInvalue('')
    }

    const handleDelete = (idToDelete) => {
        const newTodo = todos.filter((todo) => todo.id !== idToDelete)
        setTodos(newTodo)
    }

    const handleToggle = (toggleId) => {
        const toggleTodo = todos.map((todo) => {
            if (todo.id === toggleId) {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            return todo
        })
        setTodos(toggleTodo)
    }

    const handleEditStart = (todo) => {
        setEditingId(todo.id)
        setEditingText(todo.task)
    }
    const handleInputEdit = (e)=>{
        setEditingText(e.target.value)
    }
    const handleEdit = (e) =>{
        e.preventDefault()
        const updatedTodo = todos.map((todo)=>{
            if(editingId === todo.id){
                return {...todo, task: editingText}
            }
            return todo
        })
        setTodos(updatedTodo)
        setEditingId(null)
        setEditingText('')

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
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                {
                    editingId ?
                        <form onSubmit={handleEdit}>
                            <Grid container spacing={2}>
                                <Grid size={8}>
                                    <TextField value={editingText} onChange={handleInputEdit} fullWidth label="Your Todo Text Here"/>
                                </Grid>
                                <Grid size={4}>

                                    <Button type="submit" variant="contained">Save</Button>
                                </Grid>
                            </Grid>
                        </form>
                        :
                        todos.map((todo) => (

                            <Grid key={todo.id} container size={12} >
                                <Card sx={{ bgcolor: todo.isCompleted ? 'text.disabled' : 'info.main' }}>
                                    <span onClick={() => handleToggle(todo.id)} style={{ cursor: 'pointer' }}>
                                        {todo.task}
                                    </span>
                                    <Button onClick={() => handleEditStart(todo)} variant="contained" color="secondary">Edit</Button>
                                    <Button onClick={() => handleDelete(todo.id)} variant="contained" color="error">X</Button>
                                </Card>
                            </Grid>
                        ))
                }
            </Grid>
            <hr />

        </>
    )
}
export default TodoApp