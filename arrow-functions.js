const addV1 = function (a, b) {
  return a + b
}
addV1(1, 2)

const addV2 = (a, b) => {
  return a + b
}
addV2(2, 3)

const addV3 = (a, b) => a + b
addV3(3, 4)

const doubleV1 = function (number) {
  return 2 * number
}
doubleV1(8)

// when using a single arguement you can drop the ( )
const doubleV2 = number => 2 * number
doubleV2(4)

// if there is no arguement, have to have ( ) still
const two = () => 2
two()

const numbers = [1, 2, 3]
numbers.map(function (number) {
  return 2 * number
})
numbers.map(number => 2 * number)

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map(member => `${member} is on team ${this.teamName}`)
  }
}
team.teamSummary()

const fibonacciV1 = function(n) {
  if (n < 3) return 1;
  return fibonacciV1(n - 1) + fibonacciV1(n - 2)
}

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const profileV1 = {
    name: 'Alex'
}

// can't use fat arrow here because we won't be able to reference name
const profile = {
  name: 'Alex',
	getName: function () {
    return this.name
  }
}

profile.getName()



