const backpack = require('./backpack.json');
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
    res.status(200).send(backpack)
  },
  editBackpack: (req, res) => {
    const { newEdit } = req.body
    const i = backpack.findIndex(e => e.id === +req.params.id)
    backpack[i] = { ...backpack[i], ...newEdit }
    res.status(200).send(backpack)
  },
  deleteBackpackItem: (req, res) => {
    const { id } = req.params
    const i = backpack.findIndex(e => e.id === +id)
    backpack.splice(index, 1)
    res.status(200).send(backpack)
  }
}