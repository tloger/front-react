var Reflux = require('reflux')

var appActions = Reflux.createActions([
  'getAllClients',
  'saveClient',
  'deleteClient',

  'getAllProjects',
  'saveProject',
  'deleteProject',


  'getAllTasks',
])

module.exports = appActions;