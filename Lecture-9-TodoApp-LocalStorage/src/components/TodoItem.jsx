function TodoItem({
    todos,
    editingId,
    handleEdit,
    editingText,
    handleInputEdit,
    handleToggle,
    handleEditStart,
    handleDelete
}) {
    return (
        <>
            {
                editingId ?
                    <form onSubmit={handleEdit}>
                        <input value={editingText} onChange={handleInputEdit}  placeholder="Your Todo Text Here" />
                        <button type="submit" >Save</button>
                    </form>
                    :
                    todos.map((todo) => (
                        <li key={todo.id} style={{ color: todo.isCompleted ? 'grey' : 'black' }}>
                            <span onClick={() => handleToggle(todo.id)} style={{ cursor: 'pointer' }}>
                                {todo.task}
                            </span>
                            <button onClick={() => handleEditStart(todo)}>Edit</button>
                            <button onClick={() => handleDelete(todo.id)}>X</button>
                        </li>
                    ))
            }
        </>
    )
}
export default TodoItem