const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  console.log('req.method1 ', next)
  if (
    req.method === 'OPTIONS' ||
    req.url === '/signin' ||
    req.url === '/register'
  ) {
    next()
    console.log('req.method2', req.url)
    return
  }
  console.log('req.method3', req.url)
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Non Authorized' })
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    console.log('decoded', decoded.username)
    req.query.nickname = decoded.username
    next()
  } catch (e) {
    res.status(401).json({ message: 'Non Authorized' })
  }
}
