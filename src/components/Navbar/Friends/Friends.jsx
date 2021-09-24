import React from 'react';
import classes from"./Friends.module.css"
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
  const FriendsElements = props.friends.map((f) => <FriendsItem name={f.name} img={f.img}/>)
  return (
      <div>
        <h5>Friends</h5>
        <div className={classes.friendsWrapper}>{FriendsElements}</div>
      </div>
  );
};

export default Friends;