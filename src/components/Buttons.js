import React from 'react';

const Buttons = (props) => {
  return (
    <div className="buttons">
      <button
        onClick={() => props.toggleEdit()}>Edit</button>
      <button
        onClick={() => props.deleteBackpackItem(props.backpack.id)}>Delete</button>
    </div>
  )
};

export default Buttons;