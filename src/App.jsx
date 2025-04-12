

import { useState } from 'react'
import './App.css'

function App() {
  let [tasks, setTasks] = useState([])
  let [text, setText] = useState('')
  let [isUpdate, setUpdate] = useState(false)
  let [index, setIndex] = useState(null)
  
  let handleAddTodo = () => {
    console.log('add Todo',);
    setTasks([...tasks,text])
    setText('')

  }  

  let handleInputChange = (e)=>{
    setText(e.target.value);
    
  }
  let handleDelete = (index)=>{
    let newTasks = [...tasks]
    newTasks.splice(index,1)
    setTasks(newTasks)
    
    console.log(newTasks,tasks);
  }

  let handleEdit =(item,index)=>{
    setUpdate(true)
    setText(item)
    setIndex(index)
  }
  
  let handleUpdate =()=>{
    let newTasks = [...tasks]
    newTasks[index]= text
    setTasks(newTasks)
    setText('')
    setUpdate(false)

  }




  return (
    <>
      <div className='container'>
        <h1>Todo App</h1>
        <div className='todobox'>
        <input value={text} onChange={handleInputChange} placeholder='Write your task'/>
        {isUpdate
        ?
        <button onClick={handleUpdate}>Update</button>
        :
        <button onClick={handleAddTodo}>Add</button>
        }
        </div>
        <ul>
          {
            tasks.map((item,index)=>(

              <li>{item} <button onClick={()=>handleEdit(item,index)}>Edit</button> <button onClick={()=>handleDelete(index)}>Delete</button></li>
            ))
          }
          
        </ul>
      </div>
     
    </>
  )
}

export default App
