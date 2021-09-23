import React  from "react"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return (
      <div>My posts
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Add post</button>
        </div>
        <div className={classes.posts}>
          <Post message="Hi, here" likesCount="15"/>
          <Post message="Hi"  likesCount="20"/>
        </div>
      </div>
  )
}

export default MyPosts;