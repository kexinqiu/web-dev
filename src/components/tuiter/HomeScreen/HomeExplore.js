import React from "react";
import NavigationSidebar from "../NavigationSidebar/navigation-sidebar";
import PostSummaryList from "../PostSummaryList/post-summary-list"
import PostList from "./post-list";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="Home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <PostList />
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 mt-2">
                <PostSummaryList />
            </div>
        </div>
    );
};
export default HomeScreen;