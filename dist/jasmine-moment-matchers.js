(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var toBeSameMatcher = require('./toBeSameMomentAs');

beforeEach(function() {
    jasmine.addMatchers({
        toBeSameMomentAs : toBeSameMatcher
    });
});


},{"./toBeSameMomentAs":2}],2:[function(require,module,exports){
function toBeSameMomentAs() {

        function doCompare(a, e, negate) {
            var result = {};
            var isSame = a.isSame(e);
            result.pass = negate ? !isSame : isSame;
            var message = negate ?  " to not be " : " to be ";
            result.message = "Expected "  + a.toISOString() + message + e.toISOString();
            return result;
        }

        return {
          compare: function(actual, expected){
            return doCompare(actual, expected, false);
          },
          negativeCompare: function(actual, expected){
            return doCompare(actual, expected, true);
          }
        };
      }function Player() {
}

module.exports = toBeSameMomentAs;

},{}]},{},[1]);
