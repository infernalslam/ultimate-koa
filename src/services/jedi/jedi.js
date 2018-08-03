const axios = require('axios')

class Jedi {
  constructor () {
    this.axios = axios.create({
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  async findLukeSkyWallker () {
    const { data } = await this.axios.get('https://swapi.co/api/people/1')
    return data
  }
}


module.exports = Jedi