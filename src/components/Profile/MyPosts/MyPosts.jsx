import React  from "react"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return (
      <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={classes.posts}>
          <Post message="Hi, here" likesCount="15"/>
          <Post message="Hi"  likesCount="20"/>
        </div>
      </div>
  )
}

export default MyPosts;