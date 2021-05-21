import React,{useState,useEffect} from 'react'
import Context from './Context'
import TodoList from './Todo/TodoList'
import Loader from './Loader'

const AddTodo=React.lazy(()=>new Promise(resolve=>
  setTimeout(()=>{resolve(import('./Todo/AddTodo'))},3000)
  ))

function App() {
const[todos,setTodos]=useState([ ]);
const[loader,setLoader]=useState(true);
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(response => response.json())
  .then(todos =>
    setTimeout(()=>{
      setTodos(todos)
      setLoader(false)},2000),
   
    
    )
 },[]);


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
      <React.Suspense fallback={<p>loading...</p>}>
      <AddTodo onCreate={adTodo}/>
      </React.Suspense>
     
      {loader && <Loader/>}
      {todos.length ?(<TodoList todos={todos}/>):loader ?null :(<p>no todos</p>)}
    </div>
    </Context.Provider>
  );
}

export default App;
