// 19. Create Reducer: created in form of slices (todoSlice.js)

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { todos: [{ id: '1', text: "HELLO" }] }; //can be array or object

export const todoSlice = createSlice({
  name: 'todo',  //any name but it shows on page
  initialState,
  reducers: { //contains properties and functions
    addTodo: (state, action) => {   //default hai, state gives access to current values, action means kya krna h
      const todo = {
        id: nanoid(), //creates random id (using nanoid from toolkit)
        text: action.payload //jo hm send krenge
      };
      state.todos.push(todo); //pushes new todo to state
    },
    removeTodo: (state, action) => {  //functions just declare yha not define
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); //copy krlo todo ko aur jo id remove krni use mt lena
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; //ye fn alag se export bi kro
export default todoSlice.reducer;
