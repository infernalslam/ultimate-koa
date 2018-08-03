const axios = require('axios')

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 20000
})

axiosInstance.interceptors.response.use(axiosResponseInterceptor, axiosResponseErrorInterceptor)
async function axiosResponseInterceptor (response) {
  return response.data
}
async function axiosResponseErrorInterceptor (error) {
  return Promise.reject(error)
}

// export function setAxiosToken (token) {
//   axiosInstance.defaults.headers.common['Authorization'] = token
//   axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// }

// const token = getToken()
// if (token) {
//   setAxiosToken(token)
// }

module.exports = axiosInstance
