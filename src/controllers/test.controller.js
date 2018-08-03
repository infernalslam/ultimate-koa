const { serviceAccount } = require('../services/account')
const { serviceJedi } = require('../services/jedi')
const testController = {
  async helloWorld (ctx) {
    ctx.body = 'hello world !'
  },
  async craeteAccount (ctx) {
    let form = {
      account: '1',
      name: 'tak',
      surname: 'mint'
    }
    await serviceAccount.craeteAccount(form)
    ctx.body = 'ok'
  },
  async findJedi (ctx) {
    const response = await serviceJedi.findLukeSkyWallker()
    ctx.body = response
  }
}

module.exports = testController
