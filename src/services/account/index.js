const Account = require('./account')
const serviceAccount = new Account({
  env: 'local' // process.env.NODE_ENV
})

module.exports = {
  serviceAccount
}
