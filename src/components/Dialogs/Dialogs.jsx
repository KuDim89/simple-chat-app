import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  console.log(props)
  let dialogsElement = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);

  let messagesElements = props.messages.map(m => <Message message={m.message} />)

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{ dialogsElement }</div>
      </div>
      <div className={classes.messages}>{ messagesElements }</div>
    </div>
  )
}

export default Dialogs;