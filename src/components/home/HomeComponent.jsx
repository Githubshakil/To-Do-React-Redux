import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, inputValue, updateTodo } from '../../todo/todoSlice';

const HomeComponent = () => {
  
    const data = useSelector((state)=>state.todo.value)
    const inValue = useSelector((state)=>state.todo.inValue)
    const addBtn = useSelector((state)=>state.todo.addBtn)
    
    const dispatch = useDispatch()

    return (
        <>
            <div className='container'>
                <h1>Todo App</h1>
                <div className='todobox'>
                    <input value={inValue} onChange={(e)=>dispatch(inputValue(e.target.value))} placeholder='Write your task'/>
                    {
                        addBtn
                        ?
                        <button onClick={()=>dispatch(addTodo(inValue))}>Add</button>
                        :
                        <button onClick={()=>dispatch(updateTodo())} >Update</button>
                    }
                </div>
                <ul>
                    {
                        data.map((item,index)=>(
                        <li key={index}>{item} <button onClick={()=>dispatch(editTodo(index))}>Edit</button> <button onClick={()=>dispatch(deleteTodo(index))}>Delete</button></li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default HomeComponent;