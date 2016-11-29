var shoppingBasket = {
  items: [],
  discounts: [],
  
  size: function() {
    return this.items.length;
  },

  add: function(item) {
    this.items.push(item);
  },

  empty: function() {
    this.items.length = 0;
  },

  remove: function(itemToRemove) {
    var index = 0;
    for (item of this.items)
      if (item.name === itemToRemove) {
       this.items.splice( this.items[index], 1 );
      }
    index++;
  },

  total: function() {
    var total = 0;
    for (item of this.items) {
      total += item.price;
    }
    return total;
  }


}

module.exports = shoppingBasket;