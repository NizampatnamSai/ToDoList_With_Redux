import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selecttodos } from './features/todoSlice';

function App() {


  const todoList=useSelector(selecttodos)

  // const todoList=[{
  //   item:'todo',
  //   done:false,
  //   id:35623565
  // },{
  //   item:'todo2',
  //   done:true,
  //   id:534.2575
  // },]



  return (
    <div className="app">
    
    <div className='app_container'>


    <div className='app_todoContainer'>

       {todoList.map(item=>  
         
         <TodoItem name={item.item}
         done={item.done}
         id={item.id}/>
       )}

  
   </div>



     <Input/>
    </div>
    </div>
  );
}

export default App;
