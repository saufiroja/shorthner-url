require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
const shortUrlRouters = require('./routes/shortUrl.routers');

app.use(shortUrlRouters);

// ERROR HANDLING
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    message: err.message || 'internal server error',
    error: err,
  });
});

const sequelize = require('./database/models/sequelize');
const { PORT } = process.env;
(async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`connect on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
