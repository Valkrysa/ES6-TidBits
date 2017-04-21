var numbers = [1,2,3];
var doubled = [];

for (var i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

doubled = numbers.map(function (number) {
	return number * 2;
})

var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

var prices = cars.map(function (car) {
  return car.price;
});

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var heights = images.map(function (image) {
  return image.height;
});

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function (trip) {
    return trip.distance / trip.time;
});
