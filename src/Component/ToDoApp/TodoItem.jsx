import React, { useState } from 'react'

const TodoItem = ({todo,updateTodo,deleteTodo}) => {

    const[isEditing,setIsEditing] = useState(false);
    const[newText,setNewText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        updateTodo(todo.id,newText);
        setIsEditing(false);
    }

    const handleDelete = () => {
        deleteTodo(todo.id);
    }

  return (
    <div>
        <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
    </div>
  )
}

export default TodoItem