import React,{useState} from 'react'
import Context from './Context'
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo'

function App() {
const[todos,setTodos]=useState([
  {id:1,complited:true,title:'Купит хлеб'},
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
  function adTodo(title){
    setTodos(todos.concat([{
      title,
      id:Date.now(),
      complited:false
    }]))}
  return (
    <Context.Provider value={{toogleTodo,removeTodo}}>
    <div className='wrapper'>
      <h1>React tutorial</h1>
      <AddTodo onCreate={adTodo}/>
      {todos.length ?<TodoList todos={todos}/>:<p>no todos</p>}
    </div>
    </Context.Provider>
  );
}

export default App;
