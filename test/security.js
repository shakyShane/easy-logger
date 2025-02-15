/* jshint ignore:start */
var assert      = require("chai").assert;
var easyLogger  = require("../index");

describe("Security", function(){
    var logger;
    beforeEach(function () {
        logger = easyLogger;
    });

    it("object should not be polluted", function(){
        var someObj = {};
        logger.Logger(JSON.parse("{\"__proto__\":{\"pollutedKey\":123}}"));
        assert.equal(someObj.__proto__.pollutedKey, undefined);
    });
});
/* jshint ignore:end */
