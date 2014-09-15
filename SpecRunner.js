require.config({
  baseUrl: '/backbone-tests/',
  paths: {
    'jquery'        : '/bower_components/jquery/dist/jquery',
    'underscore'    : '/bower_components/underscore/underscore',
    'backbone'      : '/bower_components/backbone/backbone',
    'mocha'         : '/bower_components/mocha/mocha',
    'chai'          : '/bower_components/chai/chai',
    'chai-jquery'   : '/bower_components/chai-jquery/chai-jquery',
    'models'        : '/app/models'
  },    
  shim: {
    'chai-jquery': ['jquery', 'chai'],
    'mocha': {
      exports: 'mocha'
    }
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});

define(function(require) {
  var chai = require('chai');
  var mocha = require('mocha');
  require('jquery');
  var chaiJquery = require('chai-jquery');

  // Chai
  var should = chai.should();
  chai.use(chaiJquery);

  mocha.setup('bdd');

  require([
    'specs/model-tests.js',
  ], function() {
    mocha.run();
  });

});