var Reflux = require('reflux')

var appActions = Reflux.createActions([
  'getAllClients',
  'saveClient',

  'getAllProjects',
  'getAllTasks',
])

module.exports = appActions;