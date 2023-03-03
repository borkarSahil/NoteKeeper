import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import date from 'date-and-time';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
    
   <div className="Date-Time">
    <h9>{date.format(new Date(), 'DD-MM-YYYY')} </h9>
    <h8>{date.format(new Date(), 'hh:mm A ')}</h8>
    </div>
    
    
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
