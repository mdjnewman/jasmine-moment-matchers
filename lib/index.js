
var toBeSameMatcher = require('./toBeSameMomentAs');

beforeEach(function() {
    jasmine.addMatchers({
        toBeSameMomentAs : toBeSameMatcher
    });
});

