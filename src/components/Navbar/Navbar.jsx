import React  from "react"
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
      <nav className={classes.nav}>
        <ul>
          <li className={classes.item}><a href="/profile">Profile</a></li>
          <li className={`${classes.item} ${classes.active}`}><a href="/dialogs">Messages</a></li>
          <li className={classes.item}><a href="#s">News</a></li>
          <li className={classes.item}><a href="#s">Music</a></li>
          <li className={classes.item}><a href="#s">Settings</a></li>
        </ul>
      </nav>
  )
}

export default Navbar;