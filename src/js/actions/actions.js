var Reflux = require('reflux')

var appActions = Reflux.createActions([
  'getAllClients',
  'saveClient',
  'deleteClient',

  'getAllProjects',
  'saveProject',
  'deleteProject',

  'getAllTasks',
  'saveTask',
  'deleteTask',
])

module.exports = appActions;