import React from "react";
import s from "./Posts.module.css";




const MyPosts = () => {
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
                <button>Add Posts</button>
            </div>
            <div className = {s.posts}>
               
            </div>
        </div>
    );
}

export default MyPosts;