import { legacy_createStore as createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

/* export const addToDo = (text, id) => {
  return {
    type: "ADD",
    text,
    id,
  };
};

export const deleteToDo = (id) => {
  return {
    type: "DELETE",
    id,
  };
}; */

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");
console.log(addToDo(), deleteToDo());
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return [{ text: action.payload.text, id: action.payload.id }, ...state];
    case "DELETE":
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
