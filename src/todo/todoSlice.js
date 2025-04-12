import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  inValue:"",
  addBtn: true,
  updateIndex:""
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    inputValue: (state, action) => {
      state.inValue = action.payload;
    },
    addTodo: (state, action) => {
        state.value.push(action.payload)
        state.inValue = ""
    },
    deleteTodo:(state, action) => {
        let index = action.payload
        state.value.splice(index, 1)
    },
    editTodo: (state, action) =>{
        let index = action.payload
        state.inValue = state.value[index]
        state.updateIndex = index
        state.addBtn = false
    },
    updateTodo:(state, action) => {
        state.value[state.updateIndex] = state.inValue;
        state.addBtn = true
        state.inValue = ""
    }
  },
})


export const { inputValue, addTodo, deleteTodo, editTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer