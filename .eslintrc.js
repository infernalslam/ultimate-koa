module.exports = {
  root: true,
  extends: ["standard"],
  plugins: [
    'js'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}