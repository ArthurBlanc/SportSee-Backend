const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()
//app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
const port = 3000

app.use(router)

app.listen(port, () => console.log(`Magic happens on port ${port}`))
