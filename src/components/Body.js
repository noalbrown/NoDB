import React, { Component } from 'react';
import axios from 'axios';
import BackpackItem from './BackpackItem'
import AddItems from './AddItems'

class Body extends Component {
  constructor() {
    super()
    this.state = {
      backpack: []
    }
    this.addBackpackItem = this.addBackpackItem.bind(this)
    this.editBackpack = this.editBackpack.bind(this)
    this.deleteBackpackItem = this.deleteBackpackItem.bind(this)
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
      }).catch(error => console.log(error))
  }

  addBackpackItem(supplies, quantity) {
    axios.post('/api/backpack', { supplies, quantity }).then(res => {
      this.setState({
        backpack: res.data
      })
    }).catch(error => console.log(error))
  }

  editBackpack = (id) => {
    axios.put(`/api/backpack/edit/${id}`)
      .then(res => {
        this.setState({
          backpack: res.data
        })
      }).catch(error => console.log(error))
  }

  deleteBackpackItem = (id) => {
    axios.delete(`/api/backpack/${id}`)
      .then(res => {
        this.setState({
          backpack: res.data
        })
      }).catch(error => console.log(error))
  }


  render() {

    return (
      <div className="body">
        <div>
          <img src="https://lh3.googleusercontent.com/proxy/ZfBC34zjuEXvfBhmmVrc2JwNnE0lYjCw2UoMFfkOMkdsXZluxUgjgMGo3ldwfxgJTy4Zy_9xXZ5zrYVdQ_0ux9aiTdEH23bxXrGYTuTe6Ww7AWXIVnBoqXbT40R8" alt="backpack" />
        </div>
        <section className="add-list">
          <AddItems addBackpackItem={this.addBackpackItem} />
        </section>
        <section className="itemList">
          <BackpackItem editBackpack={this.editBackpack} deleteBackpackItem={this.deleteBackpackItem} backpack={this.state.backpack} />
        </section>
      </div>
    )
  };
}


export default Body;