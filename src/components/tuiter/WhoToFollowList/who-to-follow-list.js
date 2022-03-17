import React from "react";
import items from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item"


const WhoToFollowList = () => {

    return(
        <>
        <ul className="list-group mt-2">
            <li className="list-group-item wd-right-bar-font-border wd-right-bar-width">Who to follow</li>
            {
                items.map(item=>{
                    return(<WhoToFollowListItem who={item}/>);
                })
            }
         </ul>
        </>
    );
}
export default WhoToFollowList;