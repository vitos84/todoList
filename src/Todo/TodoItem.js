import React,{useContext} from 'react'
import './TodoItem.css'
import Context from '../Context'

 
function TodoItem({todo,index}){


    const classes=[];
    let disabled=false;
    if(todo.complited){
        classes.push('done')
    }else{disabled=true}
    const{toogleTodo,removeTodo}=useContext(Context);
    return(
        <li>
            <span className={classes.join(' ')}>
            
            <input type='checkbox'
            onChange={()=>toogleTodo(todo.id)}
            ></input>
            <strong>{index+1}</strong>
            {todo.title}
            </span>
            
           <button disabled={disabled}  onClick={removeTodo.bind(null,todo.id)}>&times;</button>
        </li>
    )
}

export default TodoItem;