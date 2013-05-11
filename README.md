dev-vars
========

[![NPM version](https://badge.fury.io/js/dev-vars.png)](https://npmjs.org/package/dev-vars) [![Build Status](https://travis-ci.org/bigbam505/dev-vars.png?branch=master)](https://travis-ci.org/bigbam505/dev-vars)

### Idea

The idea for this module is to load enviromental variables for development.

### Usage

You can refer to the examples folder for an example on typical usage below is an example

```javascript
  // Inside your project file
  // This will load a file called .env.json 
  require('dev-vars')().load();
  
  // This will load a file called /variables/.env.json
  require('dev-vars')().load({ path: '/variables' });
  
  // If for some reason you need to reset your enviromental variables you can use this
  var dev_vars = require('dev-vars')();
  dev_vars.reset();
```


### Why?

I created this because I wanted something that could do one task Load enviromental variables from a file and I did not see a 'simple' alternative.
