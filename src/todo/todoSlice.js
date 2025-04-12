import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  inValue:"",
  addBtn: true,
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
        console.log(state.value)
    },
  },
})

// Action creators are generated for each case reducer function
export const { inputValue, addTodo } = todoSlice.actions

export default todoSlice.reducer