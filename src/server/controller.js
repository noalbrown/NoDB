const backpack = require('./backpack.json');

module.exports = {
  getBackpack: (req, res) => {
    res.status(200).send(backpack);
  }
}