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
    assert.equal(0, shoppingBasket.size());
  })

  it("can be added to", function(){
    shoppingBasket.add({name: "bread", price: 0.8});
    assert.equal("bread", shoppingBasket.items[0].name);
  });

  it("can remove item by name", function(){
    shoppingBasket.add({name: "bread", price: 0.8});
    shoppingBasket.add({name: "milk", price: 1});
    shoppingBasket.remove("bread");
    assert.equal("milk", shoppingBasket.items[0].name);

  })

  it("can calculate a total", function(){
    shoppingBasket.add({name: "bread", price: 0.8});
    shoppingBasket.add({name: "beer", price: 4});
    assert.equal(4.8, shoppingBasket.total());
  })

});

