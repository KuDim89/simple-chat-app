import React from "react";
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <div className={classes.dialog + " " + classes.active}>Dima</div>
          <div className={classes.dialog}>Andrey</div>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>Hi Hi</div>
      </div>
    </div>
  )
}

export default Dialogs;