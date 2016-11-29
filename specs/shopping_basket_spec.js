var assert = require("assert");
var shopping_bastet = require("../shopping_basket");


describe("Shopping Basket", function() {
  
  it("starts empty", function(){  
    assert.equal(0, shopping_basket.size());
  })

});