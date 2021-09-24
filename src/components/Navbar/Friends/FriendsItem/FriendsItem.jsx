import React from 'react';
import classes from './FriendsItem.module.css';

const FriendsItem = (props) => {
  return (
      <div>
        <img className={classes.itemImg} src={props.img} alt=""/>
        <div className={classes.name}>{props.name}</div>
      </div>
  );
};

export default FriendsItem;