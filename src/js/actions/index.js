var Reflux = require('reflux')

var appActions = Reflux.createActions([
  'getAllClients',
  'getAllProjects',
  'getAllTasks',
])

module.exports = appActions;