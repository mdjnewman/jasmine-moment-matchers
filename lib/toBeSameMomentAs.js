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
