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

  editBackpack = (id, supplies, quantity) => {
    axios.put(`/api/backpack/edit/${id}`, { supplies, quantity })
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

  resetBackpack = () => {
    axios.delete(`/api/backpack`)
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
          <img src="http://clipart-library.com/img/1720645.png" alt="backpack" />
        </div>
        <section className="add-list">
          <AddItems addBackpackItem={this.addBackpackItem} />
        </section>
        <section className="itemList">
          {this.state.backpack.map((backpack) => {
            return <BackpackItem editBackpack={this.editBackpack} deleteBackpackItem={this.deleteBackpackItem} resetBackpack={this.resetBackpack} backpack={backpack} />
          })}
        </section>
        <button onClick={this.resetBackpack}>Empty Backpack!</button>
      </div>
    )
  };
}


export default Body;