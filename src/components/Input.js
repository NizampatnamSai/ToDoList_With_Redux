import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'
import './Input.css'

const Input = () => {

    const dispatch=useDispatch()

    const [input,setInput]=useState('')

    const addTodo=()=>{

        dispatch(saveTodo({
            item:input,
            done:false,
            id:Date.now()
        }))

      setInput('')
    }
  return (
    <div className='input'>
     <input placeholder='type here...' type='text' value={input} onChange={e=>setInput(e.target.value)}/>
     <button onClick={addTodo}>Add!</button>
      
    </div>
  )
}

export default Input
