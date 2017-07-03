// Old style using prototypal inheritance
/*
// constructor
function Car (options) {
  this.title = options.title
}

// modify the prototype of the constructor
Car.prototype.drive = function () {
  return 'vroom'
}

function Toyota (options) {
  Car.call(this, options)
  this.color = options.color
}

Toyota.prototype = Object.create(Car.prototype)
Toyota.prototype.constructor = Toyota

Toyota.prototype.honk = function () {
  return 'beep'
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' })
toyota;
toyota.drive()
toyota.honk()
*/
// New style ES6 Classes

class Car {
  constructor ({ title }) {
    this.title = title
  }

  drive () {
    return 'vroom'
  }
}

class Toyota extends Car {
  constructor (options) {
    super(options)
    this.color = options.color
  }

  honk () {
    return 'beep'
  }
}

const toyota = new Toyota ({ title: 'Daily Driver', color: 'red' })
toyota.honk()
toyota.drive()
toyota

class Monster {
  constructor (options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
	constructor (options) {
  	super(options) 
  }
  
  bite (otherSnake) {
    otherSnake.health -= 10
  }
}
const nigel = new Snake({ name: 'Nigel' })
const fred = new Snake({ name: 'Fred' })
nigel.bite(fred)
nigel
fred
