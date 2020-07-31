import React, { Component } from 'react';
import axios from 'axios';
import BackpackItem from './BackpackItem'
import AddItems from './AddItems'

class Body extends Component {
  constructor() {
    super()
    this.state = {
      backpackItems: []
    }
    this.addBackpackItem = this.addBackpackItem.bind(this)
  }

  componentDidMount() {
    this.getBackpack();
  }

  getBackpack = () => {
    axios.get('/api/backpack')
      .then(res => {
        this.setState({
          backpack: res.data
        })
      }
      ).catch(error => console.log(error))
  }

  addBackpackItem(supplies, quantity) {
    const id = this.state.backpackItems[this.state.backpackItems.length - 1].id + 1
    const newBackpackItem = { id, supplies, quantity }
    const newArr = [...this.state.backpackItems, newBackpackItem]
    this.setState({
      backpackItems: newArr
    })
  }


  render() {

    return (
      <div className="body">
        <section className="addlist">
          <AddItems addBackpackItem={this.addBackpackItem} />
        </section>
        <section className="itemList">
          <BackpackItem />
        </section>
      </div>
    )
  };
}


export default Body;