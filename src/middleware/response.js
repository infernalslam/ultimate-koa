const responseMiddle = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log(err)
    ctx.throw(parseInt(err.status, 10), err.message)
  }
}

module.exports = responseMiddle
