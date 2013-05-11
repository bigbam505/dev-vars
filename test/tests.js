var should = require('should'),
    _ = require('lodash')


  describe('dev-vars', function(){
      var original_env = _.clone(process.env),
    vars = require('../lib/dev-vars.js')();

    beforeEach(function() {
      process.env = original_env;
    })

    describe('#version', function(){
      it('should return a correct version format', function(){
        vars.version.should.match(/^\d+\.\d+\.\d+$/);
      })
    })

    describe('#reset', function(){
      it('should return the original envirmental variables', function(){
        vars.reset().should.equal(process.env);
      })

      it('should reset process.env', function(){
        vars.load({ path: '/test' }).should.be.true;
        vars.reset();
        should.not.exist(process.env.MY_LOADED_VALUE)
      })
    })

    describe('#load', function(){
      it('should return true when successful', function(){
        vars.load({ path: '/test' }).should.be.true;
      })

      it('should load the enviromental variables from .env.json by default', function(){
        vars.load({ path: '/test' }).should.be.true;
        process.env.MY_LOADED_VALUE.should.equal('SUCCESS');
        vars.reset();
      })
    })
  })

