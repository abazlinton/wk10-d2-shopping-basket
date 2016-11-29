var shoppingBasket = {
  items: [],
  
  size: function() {
    return this.items.length;
  },

  add: function(item) {
    this.items.push(item);
  },

  empty: function() {
    this.items.length = 0;
  }


}

module.exports = shoppingBasket;