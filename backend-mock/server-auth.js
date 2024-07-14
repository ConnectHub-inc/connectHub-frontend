const express = require('express')
const bodyParser = require('body-parser');
const { AuthController } = require('./controller/AuthController')

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// routing
app.post('/api/user/login', new AuthController().login)
app.post('/api/user/verify', new AuthController().verify)

// error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('500 Internal server error')
})

// listen
app.listen(port, () => {
  console.log(`auth server started! http://localhost:${port}`)
})