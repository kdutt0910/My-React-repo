import React, { useState } from 'react'

const TodoForm = () => {
  const [inputTodo, setinputTodo] = useState("");

  const submitHandler = () => {
    addTodo(inputTodo)
  }

  return (
    <form  className="flex">
        <input
            type="text"
            placeholder="Write Todo..."
            value={inputTodo}
            onChange={(e)=>setinputTodo(e.target.value())}
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button onClick={()=>submitHandler} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
  )
}

export default TodoForm