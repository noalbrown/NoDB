import React, { Component } from 'react';
import Buttons from './Buttons'

class BackpackItem extends Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      quantity: '',
      supplies: ''
    }
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  handleSupplies(e) {
    this.setState({
      supplies: e.target.value
    })
  }

  render() {
    const { backpack, editBackpack, deleteBackpackItem } = this.props
    console.log(backpack)
    return (
      <div key={backpack.id}>
        {this.state.edit ? (
          <div className="edit-menu">
            <input id="edit-menu-1" placeholder="Edit Item" onChange={(e) => {
              this.handleSupplies(e)
            }} />
            <input id="edit-menu-2" placeholder="Edit Amount" onChange={(e) => {
              this.handleQuantity(e)
            }} />
            <div>
              <button onClick={() => {
                editBackpack(backpack.id, this.state.supplies, this.state.quantity)
                this.toggleEdit()
              }}>Save</button>
              <button onClick={this.toggleEdit}>Cancel</button>
            </div>
          </div>
        ) : (
            <div>
              <p>{backpack.supplies} x {backpack.quantity}</p>
              <Buttons
                toggleEdit={this.toggleEdit}
                deleteBackpackItem={deleteBackpackItem}
                backpack={backpack} />
            </div>
          )}
      </div>
    )
  };
}

export default BackpackItem;