var Reflux = require('reflux')

var appActions = Reflux.createActions([
  'getAllClients',
  'saveClient',
  'deleteClient',

  'getAllProjects',
  'getAllTasks',
])

module.exports = appActions;