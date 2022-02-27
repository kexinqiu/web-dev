const PostSummaryItem = (post) =>{
    return(`
         
         <li class="list-group-item pe-2">
                 <div class="wd-content-text">
                         <div class="wd-float-left pb-2">
                               <div class="wd-topic">${post.topic} </div>
                               <div class="wd-title">${post.userName} <i class="fa-solid fa-circle-check"></i><span class="wd-font-color-grey"> - ${post.time}</span></div>
                               <div class="wd-text">${post.title}</div>
                               <div class="wd-topic">${post.tweets}</div>
                         </div>
                         <div>
                               <img class="wd-float-right pt-2"  src=${post.image}/>
                         </div>
                         <div class="wb-float-done"></div>
                 </div>
         </li>
    `)
}
export default PostSummaryItem;