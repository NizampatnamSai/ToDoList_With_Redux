import { createSlice } from '@reduxjs/toolkit';


export const todoSLice=createSlice({
  name:'todos',
  initialState:{
    todoList:[]
  },

  reducers:{
    saveTodo:(state,action)=>{
      state.todoList.push(action.payload)

    },
    setCheck:(state,action)=>{
      state.todoList.map(item=>{
        if(action.payload ===item.id){
          if(item.done===true){
            item.done=false
          }
          else {
            item.done=true
          }

        }
      })
    }
    
  }
});





export const {saveTodo,setCheck}=todoSLice.actions;


export const selecttodos=(state)=>state.todos.todoList

export default todoSLice.reducer