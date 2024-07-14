const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const { UserController } = require('./UserController')

dotenv.config()

class AuthControllerToken {
  constructor() {
    this._secretKey = process.env.JWT_SECRET_KEY
    this._option = {
      expiresIn: "1m",
    }
    Object.freeze(this)
  }
  generate(email, password) {
    if(email && password) {
      const token = jwt.sign({email, password}, this._secretKey, this._option)
      return token
    }
  }
  verify(token) {
    if(token) {
      try {
        return jwt.verify(token, this._secretKey)
      } catch(err) {
        console.error(err)
        return false
      }
    }
  }
}

class AuthController {
  constructor() {
    Object.freeze(this)
  }
  login(req, res) {
    const {email, password} = req.body
    const user = new UserController().lookup(email, password)
    if(user) {
      const token = new AuthControllerToken().generate(email, password)
      res.status(200).json({token})
    } else {
      console.error('user not found!')
      res.status(401).send('401 Unauthorized')
    }
  }
  verify(req, res) {
    const { token } = req.body
    const decoded = new AuthControllerToken().verify(token)
    if(decoded) {
      res.status(200).send()
    } else {
      console.error('user not found!')
      res.status(401).send('401 Unauthorized')
    }
  }
}

exports.AuthController = AuthController