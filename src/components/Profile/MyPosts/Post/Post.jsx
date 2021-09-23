import React  from "react"
import classes from "./Post.module.css"

const Post = () => {
  return (
      <div className={classes.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkOdUDfgnkJ6pg25hxZboJY9V62vC8FB92g&usqp=CAU" alt=""/>
        post 1
        <div>
          <span>like</span>
        </div>
      </div>

  )
}

export default Post;