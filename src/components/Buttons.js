import React from 'react';

const Buttons = (props) => {
  return (
    <div className="buttons">
      <button id="button-1"
        onClick={() => props.editBackpack(props.backpack.id)}>Edit</button>
      <button id="button-2"
        onClick={() => props.deleteBackpackItem(props.backpack.id)}>Delete</button>
    </div>
  )
};

export default Buttons;