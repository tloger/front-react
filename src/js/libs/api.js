var request = require('superagent');
var config = require('../config');
var q = require('q');

var api = {

  doGet: function(url) {
    var deferred = q.defer();
    request
      //.get(config.API_HOST + url)
      .get('https://gist.githubusercontent.com/sumitarora/738f781675b961d77d71/raw/6b994a695fd235115a6039ecacfb03e5ff4112d5/gistfile1.json')
      .end(function(res) {
        if (res.ok) {
          console.log('result from get: ', JSON.parse(res.text));
          deferred.resolve(JSON.parse(res.text));
        } else {
          deferred.reject('error');
        }
      });
      return deferred.promise;
  },

  doPost: function(url, data) {
    request
      .post(config.API_HOST + url)
      .send(data)
      .set('Accept', 'application/json')
      .end(function(res) {
        if (res.ok) {
          console.log('yay got ' + JSON.stringify(res.body));
        } else {
          console.log('Oh no! error ' + res.text);
        }
      });
  }
}

module.exports = api;