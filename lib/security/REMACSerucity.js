"use strict";

var _ = require('lodash');

function REMACSecurity(account_id, username, password, defaults) {
  this._account_id = account_id;
  this._username = username;
  this._password = password;
  this.defaults = {};
  _.merge(this.defaults, defaults);
}

REMACSecurity.prototype.addHeaders = function(headers) {
  
  headers.SC_ACCOUNTID = this._account_id;
  headers.SC_USERNAME = this._username;
  headers.SC_PSWD = this._password;
  
};

REMACSecurity.prototype.toXML = function() {
  return '';
};

REMACSecurity.prototype.addOptions = function(options) {
  _.merge(options, this.defaults);
};

module.exports = REMACSecurity;
