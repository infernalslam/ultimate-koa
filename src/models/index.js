const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const dbConfig = require('../config/sequelize.config')
const config = {
  host: dbConfig[process.env.NODE_ENV].host,
  dialect: dbConfig[process.env.NODE_ENV].dialect,
  port: dbConfig[process.env.NODE_ENV].port,
  logging: function () {}
}

console.log(dbConfig[process.env.NODE_ENV])

const sequelize = new Sequelize(dbConfig[process.env.NODE_ENV].database, dbConfig[process.env.NODE_ENV].username, dbConfig[process.env.NODE_ENV].password, config)
let db = {}

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function (file) {
    // register model case
    if (file.indexOf('repository') === -1) {
      let model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
    // bind repository function to model
    } else {
      let modelName = file.split('.')[0]
      let repositoryFunctions = require(path.join(__dirname, file))

      Object.keys(repositoryFunctions).forEach(function (functionName) {
        db[modelName][functionName] = repositoryFunctions[functionName]
      })
    }
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
