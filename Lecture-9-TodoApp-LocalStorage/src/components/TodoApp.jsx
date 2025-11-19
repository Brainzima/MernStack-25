import { useEffect, useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
function TodoApp() {
    const [todos, setTodos] = useState(()=>{
        const savedTodo = localStorage.getItem('todos')
        return savedTodo ? JSON.parse(savedTodo) : []
    })

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos)) //statements...
    },[todos]) //dependecies...


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
    const handleInputEdit = (e) => {
        setEditingText(e.target.value)
    }
    const handleEdit = (e) => {
        e.preventDefault()
        const updatedTodo = todos.map((todo) => {
            if (editingId === todo.id) {
                return { ...todo, task: editingText }
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
            <TodoForm
                invalue={invalue}
                handleAdd={handleAdd}
                handleInput={handleInput}
            />
            <hr />
            <h3>My All Todos:</h3>
            <TodoItem
                todos={todos}
            editingId={editingId}
            handleEdit={handleEdit}
            editingText={editingText}
            handleInputEdit={handleInputEdit}
            handleToggle={handleToggle}
            handleEditStart={handleEditStart}
            handleDelete={handleDelete}
            />
            <hr />

        </>
    )
}
export default TodoApp