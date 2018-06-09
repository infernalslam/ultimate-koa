const testController = require('./test.controller')

exports.default = {
  controller: testController,
  routes: [
    {method: 'get', url: '/hello', handler: 'helloWorld'}
  ]
}
