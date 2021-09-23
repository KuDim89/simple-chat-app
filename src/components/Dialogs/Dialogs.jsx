import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <DialogItem name="Dima" id="1"/>
          <DialogItem name="Andrey" id="2"/>
        </div>
      </div>
      <div className={classes.messages}>
        <Message message="HI here" />
        <Message message="Hi Hi" />
      </div>
    </div>
  )
}

export default Dialogs;