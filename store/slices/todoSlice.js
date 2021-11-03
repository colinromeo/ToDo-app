import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    todoData: [],
};


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoData.push(action?.payload?.todoList)
            console.log("state===", action)
        },
        updateTodo: (state, action) => {
            state.todoData[action?.payload?.index]= action?.payload?.data?.todoList
            
        },
        deleteTodo: (state, action) => {
            state.todoData.splice(action?.payload, 1)
        }
    },
    extraReducers:{}
});

export const { addTodo, updateTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;