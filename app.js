require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

const api = require('./src/routes/api')

app.use('/api/v1', api)

/*app.get('/', (req, res) => {
  res.send('Hola como estas')
});*/


app.listen(PORT, () => {
  const msg = (`Node Server is running on PORT: ${PORT}`);
  console.log(msg);
});
