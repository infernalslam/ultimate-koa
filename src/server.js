const Koa = require('koa')
const app = new Koa()
const router = require('./controllers')

app.use(router.routes())

const env = process.env.NODE_ENV || 'local'
const port = process.env.PORT || 3000
app.listen(port)
console.log('Environment: ', env)
console.log('Server is listening @ port ' + port)

exports.default = app
