import React  from "react"
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
      <div className={classes.content}>
        <img className='content-header' src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
        <div>
          ava + desc
        </div>
        <MyPosts />
      </div>
  )
}

export default Profile;