import React,{useState} from 'react'
import Context from './Context'
import TodoList from './Todo/TodoList'

function App() {
const[todos,setTodos]=useState([
  {id:1,complited:false,title:'Купит хлеб'},
  {id:2,complited:false,title:'Купит масло'},
  {id:3,complited:false,title:'Купит молоко'}
  
  ]);



  function toogleTodo(id){
    setTodos(
      todos.map(todo=>{
        if(todo.id===id){
          todo.complited=!todo.complited
        }
        return todo
      }
      )
    )
  }
  function removeTodo(id){
    setTodos(
      todos.filter(todo=>todo.id!==id)
    )
  }
  return (
    <Context.Provider value={{toogleTodo,removeTodo}}>
    <div className='wrapper'>
      <h1>React tutorial</h1>
      <TodoList todos={todos}/>
    </div>
    </Context.Provider>
  );
}

export default App;
