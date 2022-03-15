import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditionalOutput";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
const Labs = () => {
  return(
      <>
        <h1>Labs</h1>
        <ConditionalOutput/>
        <Classes/>
        <Styles/>
        <TodoItem/>
        <TodoList/>
      </>
  )
};

export default Labs;
