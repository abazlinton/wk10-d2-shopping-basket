// var assert = require("assert");
var shoppingBasket = require("../shopping_basket");
var assert = require('chai').assert;


describe("Shopping Basket", function() {

  beforeEach( function() {

  });

  afterEach( function() {
    shoppingBasket.items.length = 0;

  });
  
  it("starts empty", function(){  
    assert.equal(0, shoppingBasket.size());
  });

  it("can be emptied", function(){
    shoppingBasket.add({name: "bread", price: 0.8});
    shoppingBasket.empty();
    assert.equal(0, shoppingBasket.size())
  })

  it("can be added to", function(){
    shoppingBasket.add({name: "bread", price: 0.8});
  });

  it("can remove a specfied item", function(){
    shoppingBasket.remove("bread");

  });

  it("can calculate a total");

});

