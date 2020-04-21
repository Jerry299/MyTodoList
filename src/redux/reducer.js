//import uuid from "uuid";
import { ADD_TODO } from "./constants";

/* const initialState = {
  todo: [
    {
      id: uuid.v4(),
      title: "Take Out The Trash",
      completed: false,
    },
    {
      id: uuid.v4(),
      title: "Have Dinner with wife",
      completed: false,
    },
    {
      id: uuid.v4(),
      title: "Meeting with Boss",
      completed: false,
    },
  ],
}; */
const initialState = {
  title: "",
};

export const AddTodos = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
