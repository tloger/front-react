var Reflux = require('reflux')

var appActions = Reflux.createActions([
  'getAllClients',
  'getAllProjects'
])

module.exports = appActions;