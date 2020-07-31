const express = require('express');
const { getBackpack } = require('./controller')
const app = express();

const port = 4000;

app.use(express.json());

app.get("/api/backpack", getBackpack)

app.listen(port, () => console.log(`I am working properly on ${port}`));