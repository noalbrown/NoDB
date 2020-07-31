import React from 'react';
import Buttons from './Buttons'

const BackpackItem = (props) => {
  const backpackMap = props.backpack.map(backpack => {
    return (
      <div key={backpack.id}>
        <p>{backpack.supplies}</p>
        <p>{backpack.quantity}</p>
        <Buttons
          editBackpack={props.editBackpack}
          deleteBackpackItem={props.deleteBackpackItem}
          backpack={backpack} />
      </div>
    )
  })
  return <div className="itemButtons">
    {backpackMap}
  </div>
};

export default BackpackItem;