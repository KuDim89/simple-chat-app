import React  from "react"
import "./Profile.css"

const Profile = () => {
  return (
      <div className='content'>
        <img className='content-header' src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkOdUDfgnkJ6pg25hxZboJY9V62vC8FB92g&usqp=CAU" alt=""/>
          +desc
        </div>
        <div>My posts</div>
        <div className='posts'>New posts</div>
        <div className='item'>Post 1</div>
        <div className='item'>Post 2</div>
      </div>
  )
}

export default Profile;