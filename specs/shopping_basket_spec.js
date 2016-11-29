var assert = require("assert");
var shoppingBasket = require("../shopping_basket");


describe("Shopping Basket", function() {
  
  it("starts empty", function(){  
    assert.equal(0, shoppingBasket.size());
  })

});