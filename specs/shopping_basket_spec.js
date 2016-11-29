// var assert = require("assert");
var shoppingBasket = require("../shopping_basket");
var assert = require('chai').assert;


describe("Shopping Basket", function() {
  
  it("starts empty", function(){  
    assert.equal(0, shoppingBasket.size());
  })

  it("can be added to", function(){
    shoppingBasket.add({name: "bread", price: 0.8});
  });

  it("can remove a specfied item", function(){
    
    
  });

  it("can calculate a total");

});

