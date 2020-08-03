let backpack = require('./backpack.json');
const emptyBackpack = require('./backpack.json')
let id = backpack[backpack.length - 1].id + 1

module.exports = {
  getBackpack: (req, res) => {
    res.status(200).send(backpack);
  },
  getBackpackItem: (req, res) => {
    const { id } = req.params
    const foundBackpackItem = backpack.find(foundBackpackItem => foundBackpackItem.id === +id)
    if (!foundBackpackItem) {
      return res.status(410).send('Item not in Backpack')
    }
    res.status(200).send(foundBackpackItem)
  },
  createBackpackItem: (req, res) => {
    const { supplies, quantity } = req.body
    let newBackpackItem = { id, supplies, quantity }
    backpack.push(newBackpackItem)
    id++
    if (!newBackpackItem) {
      return res.status(404).send('Did Not Work')
    }
    res.status(200).send(backpack)
  },
  editBackpack: (req, res) => {
    const { supplies, quantity } = req.body
    let i = backpack.findIndex(e => e.id === +req.params.id)
    backpack[i] = { ...backpack[i], supplies, quantity }
    if (!i) {
      return res.status(404).send('Could Not Alter Item')
    }
    res.status(200).send(backpack)
  },
  deleteBackpackItem: (req, res) => {
    const { id } = req.params
    let index = backpack.findIndex(e => e.id === +id)
    backpack.splice(index, 1)
    if (!index) {
      return res.status(404).send('Could not delete')
    }
    res.status(200).send(backpack)
  },
  resetBackpack: (req, res) => {
    backpack = [...emptyBackpack]
    console.log(emptyBackpack)
    res.status(200).send(backpack)
  }
}