import React  from "react"
import classes from "./MyPosts.module.css"

const MyPosts = () => {
  return (
      <div>My posts
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Add post</button>
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkOdUDfgnkJ6pg25hxZboJY9V62vC8FB92g&usqp=CAU" alt=""/>
            post 1
          </div>
          <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkOdUDfgnkJ6pg25hxZboJY9V62vC8FB92g&usqp=CAU" alt=""/>
            post 2
          </div>
          <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkOdUDfgnkJ6pg25hxZboJY9V62vC8FB92g&usqp=CAU" alt=""/>
            post 3
          </div>
        </div>
      </div>
  )
}

export default MyPosts;