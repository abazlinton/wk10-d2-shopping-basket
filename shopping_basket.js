var shoppingBasket = {
  items: [],
  
  size: function() {
    return this.items.length;
  },

  add: function(item) {
    this.items.push(item);
  }


}

module.exports = shoppingBasket;