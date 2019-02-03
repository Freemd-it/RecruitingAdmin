const getHealthCheck = (req, res) => {
  try {
    res.status(200).json({});
} catch(error) {
  console.log(error)
  res.status(401).json(error)
  }
}

module.exports = {
  getHealthCheck,
}