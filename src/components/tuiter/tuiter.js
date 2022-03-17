import React from "react";
import {Link} from "react-router-dom";

import ExploreScreen from "./ExploreScreen/ExploreScreen"


const Tuiter = () => {
    return(
        <>
            <h1>Tuiter!</h1>
            <ExploreScreen />
            <Link to="/hello">Hello</Link> |
            <Link to="/labs">Labs</Link>
        </>
)
};

export default Tuiter;