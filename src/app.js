require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const sequelize = require('./database/models/sequelize');
const { PORT } = process.env;
(async () => {
  try {
    await sequelize.authenticate().then(() => {
      console.log('connect to database');
    });
    app.listen(PORT, () => {
      console.log(`connect on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
