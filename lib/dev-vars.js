var fs = require('fs'),
    path = require('path'),
    _ = require('lodash')

module.exports = DevVars

function DevVars() {
  var _self = {};

  _self.version = '0.0.0';
  _self.env = {};
  _self.env_original = _.clone(process.env);

  _self.load = function(options){
    options = options || {};

    try {
      _self.env = _parseEnvFile(options);
      _.extend(process.env, _self.env, process.env);

      return true;
    }catch(err){
      _self.env = {};
      return false;
    }
  }

  _self.reset = function(){
    process.env = _self.env_original;

    return process.env
  }

  var _parseEnvFile = function(options){
    return JSON.parse(fs.readFileSync(_getEnvFilePath(options)), 'UTF-8');
  }

  var _getEnvFilePath = function(options){
    options = options || {};
    var folder_path = options.path || '';
    var file_name = options.file || '/.env.json';

    return path.join(process.cwd(), folder_path, file_name);
  }

  return _self;
}

