const express = require('express');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.set('debug', true);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port Localhost:${PORT}!`);
  });
});