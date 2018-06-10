module.exports = {
  root: true,
  extends: ["standard"],
  plugins: [
    'js'
  ],
  env: {
    "jest": false
  },
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}