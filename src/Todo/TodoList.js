import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

function TodoList(props){
    return(
        <div>
        <ul>
            {
                props.todos.map((todo,index)=>
                <TodoItem todo={todo} key={todo.id} index={index}/>
            )}
           
        </ul>
        </div>
    )
}

export default TodoList;