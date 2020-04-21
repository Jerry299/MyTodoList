import { ADD_TODO } from "./constants";

export const setAddTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});
