
import NavigationItem from "./NavigationItem";
import React from "react";
import navigations from "./navigation.json";
import { Link } from 'react-router-dom';

const NavigationSidebar = ({active}) => {
    return(
        <>
            <div className="list-group pt-2">
                <Link className="list-group-item" to="/"><i className="fa-brands fa-twitter"></i></Link>
            
                {navigations.map(navigation=>{
                    return(<NavigationItem navigation={navigation} active={active}/>);
    })}
            </div>
            
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
