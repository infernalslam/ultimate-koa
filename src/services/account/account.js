class Account {
  constructor (config) {
    this.config = {
      env: config.env
    }
  }
  craeteAccount (data) {
    console.log('create account', data)
  }
}

module.exports = Account
