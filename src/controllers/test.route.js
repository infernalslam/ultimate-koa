const testController = require('./test.controller')

exports.default = {
  controller: testController,
  routes: [
    { method: 'GET', url: '/hello', handler: 'helloWorld' },
    { method: 'POST', url: '/account', handler: 'craeteAccount' },
    { method: 'GET', url: '/find/jedi', handler: 'findJedi' }
  ]
}
