function TodoForm({invalue, handleAdd, handleInput}) {
    return (
        <>
            <form onSubmit={handleAdd}>
                <input value={invalue} onChange={handleInput} placeholder="Your Todo Text Here" />
                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}
export default TodoForm