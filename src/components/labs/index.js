import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./ToDo/TodoItem";
import TodoList from "./ToDo/TodoList";

const Labs = () => {
    return(
        <>
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter/home">Home</Link> |
            <Link to="/tuiter/explore">Explore</Link>
        <h1>Labs!</h1>
            <TodoList />
            <TodoItem />
            <ConditionalOutput/>
            <Styles/>
            <Classes/>


        </>
)
};

export default Labs;