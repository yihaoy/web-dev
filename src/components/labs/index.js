import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditionalOutput";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import ReduxExamples from "./redux-examples";

const Labs = () => {
  return(
      <>
        <h1>Labs</h1>
        <ConditionalOutput/>
        <Classes/>
        <Styles/>p
        <TodoItem/>
        <TodoList/>
        <ReduxExamples/>

      </>
  )
};

export default Labs;
