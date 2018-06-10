const Koa = require('koa')
const cors = require('kcors')
const router = require('./controllers')

const app = new Koa()

app.use(cors())
app.use(router.routes())

const env = process.env.NODE_ENV || 'local'
const port = process.env.PORT || 3000
app.listen(port)
console.log('Environment: ', env)
console.log('Server is listening @ port ' + port)

exports.default = app
