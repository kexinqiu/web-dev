import posts from './post.json';
import PostSummaryItem from "./post-summary-item"
import React from "react";


const PostSummaryList = () => {

    return(
         <ul class="list-group">
             {
                posts.map(post=>{
                    return(<PostSummaryItem post={post}/>);
                })
             }
        </ul>
    );
}
export default PostSummaryList;