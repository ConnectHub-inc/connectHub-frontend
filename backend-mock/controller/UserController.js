class UserController {
  constructor() {
    // dummy user data
    this._values = [
      {
        id: 1,
        name: 'Alice',
        email: 'email01@example.com',
        password: 'password01',
      }
    ]
  }
  get values() {
    return this._values
  }
  lookup(email, password) {
    if(!email || !password) return
    return this._values?.find(user => 
      user.email === email &&
      user.password === password
    )
  }
}

exports.UserController = UserController