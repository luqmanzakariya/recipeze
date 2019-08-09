module.exports = function(err, req, res, next){
  console.log('masuk error handling')
  console.log(err)
  
  const status = err.status || 500
  const message = err.message || 'internal server error'
  res.status(status).json({message:message})
}