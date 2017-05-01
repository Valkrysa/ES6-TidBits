var numbers = [10, 20, 30]
var summation = 0

for (var i = 0; i < numbers.length; i++) {
  summation += numbers[i]
}

numbers.reduce(function (sum, number) {
  return sum + number
}, 0)

var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
]

primaryColors.reduce(function (previous, primaryColor) {
	previous.push(primaryColor.color)
  
  return previous
}, [])

function balancedParens (string) {
  return !string.split('').reduce(function (previous, char) {
  	if (previous < 0) {
    	return previous
    } else if (char === '(') {
      return ++previous;
    } else if (char === ')') {
      return --previous
    } else {
      return previous
    }
  }, 0)
}

balancedParens('(asdfaf())asdfasdf()')

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }]

var totalDistance = trips.reduce(function (sum, trip) {
    return sum + trip.distance
}, 0)

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
]

var deskTypes = desks.reduce(function (previous, desk) {
    previous[desk.type]++
    return previous
}, { sitting: 0, standing: 0 })

function unique(array) {
  return array.reduce(function (previous, item) {
      if (
        !previous.find(function (previousValue) {
            return previousValue === item
        }) 
      ) {
          previous.push(item)
      }
      return previous
  }, [])
}

unique([1, 1, 1, 2, 3, 4, 4, 4])
