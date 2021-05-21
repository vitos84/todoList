import React,{useState} from 'react'
import './AddTodo.css'

function useInputValue(defaultValue=''){
    const[value,setValue]=useState(defaultValue)

   return{
       bind:{
           value,
           onChange:event=>setValue(event.target.value)
       },
       value:()=>value,
       clear:()=>setValue('')
   }
}

function AddTodo({onCreate}){
   const input=useInputValue('');
    function handlerSubmit(event){
            event.preventDefault()
          if(input.value().trim()){
              onCreate(input.value())
              input.clear()
          }  
    }
    return(
        <form  onSubmit={handlerSubmit}> 
        <input {...input.bind}/>
        <button type='submit'> добавить задачу</button>
        </form>  
    )
}

export default AddTodo;