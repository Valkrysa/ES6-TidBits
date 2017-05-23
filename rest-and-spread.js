// rest gathers together variables
// spread flatten/spread variables

function addNumbersV1 (numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number
  }, 0)
}
addNumbersV1([1,2,3,4,5])

// ... is the rest operator, it allows any # of args, makes into array
function addNumbers (...numbers) { 
  return numbers.reduce((sum, number) => {
    return sum + number
  }, 0)
}
addNumbers(1,2,3,4,5,6,7)

const defaultColors = ['red', 'green']
const userFavoriteColors = ['orange', 'yellow']
const fallColors = ['fire red', 'fall orange']

// spread is essentially taking the [ ] out from around the arrays
const allColors = [ 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ]
allColors

function validateShoppingList (...items) {
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items ]
  } else {
    return items
  }
}

validateShoppingList ('oranges', 'bread')

const MathLibraryV1 = {
  calculateProduct (a, b) {
    return a * b
  }
}

const MathLibrary = {
  calculateProduct (...rest) {
    console.log('Please use the multiply method instead.')
    return this.multiply(...rest)
  },
  multiply (a, b) {
    return a * b
  }
}

function productV1(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

function joinV1(array1, array2) {
  return array1.concat(array2);
}

function join(array1, array2) {
  return [...array1, ...array2]
}

function unshiftV1(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

function unshift(array, ...numbers) {
  return [...numbers, ...array]
}
unshift([1,2,3], 4,5,6)
