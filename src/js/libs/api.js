var request = require('superagent');
var config = require('../config');
var q = require('q');

var api = {

  doGet: function(url) {
    var deferred = q.defer();
    request
      .get(config.API_HOST + url)
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
    var deferred = q.defer();
    request
      .post(config.API_HOST + url)
      .send(data)
      .set('Accept', 'application/json')
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

  doDelete: function(url) {
    var deferred = q.defer();
    request
      .del(config.API_HOST + url)
      .set('Accept', 'application/json')
      .end(function(res) {
        if (res.ok) {
          console.log('result from get: ', JSON.parse(res.text));
          deferred.resolve(JSON.parse(res.text));
        } else {
          deferred.reject('error');
        }
      });
    return deferred.promise;
  }

}

module.exports = api;