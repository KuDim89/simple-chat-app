import React  from "react"
import classes from "./Post.module.css"

const Post = (props) => {
  return (
      <div className={classes.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkOdUDfgnkJ6pg25hxZboJY9V62vC8FB92g&usqp=CAU" alt=""/>
        {props.message}
        <div>
          <span>{props.likesCount} likes</span>
        </div>
      </div>

  )
}

export default Post;