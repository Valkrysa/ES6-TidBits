function createBookShopV1 (inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle: function (title) {
      return this.inventory.find(book => book.title === title).price
    }
  }
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
]

const bookShopV1 = createBookShopV1(inventory)

bookShopV1.inventoryValue()
bookShopV1.priceForTitle('Harry Potter')

function createBookShop (inventory) {
  return {
    inventory, // whenever you have a key and value with identical names you can just list it
    inventoryValue () { // functions can be listed without colon or function keyword
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
   	priceForTitle (title) {
      return this.inventory.find(book => book.title === title).price
    }
  }
}

const bookShop = createBookShop(inventory)

bookShop.inventoryValue()
bookShop.priceForTitle('Harry Potter')

const $ = {
	ajax (someObject) {
    // placeholder
  }
}

function saveFileV1 (url, data) {
  $.ajax ({ method: 'POST', url: url, data: data })
}

const url = 'http://fileupload.com'
const data = { color: 'red' }
saveFileV1(url, data)

function saveFile (url, data) {
  $.ajax ({ method: 'POST', url, data })
}

const red = '#ff0000';
const blue = '#0000ff';

const COLORSV1 = { red: red, blue: blue };
const COLORS = { red, blue };

const canvasDimensionsV1 = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}

const color = 'red';

const CarV1 = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};

const Car = {
  color,
  drive () {
    return 'Vroom!';
  },
  getColor () {
    return this.color;
  }
};
