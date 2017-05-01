function getMessage () {
  const year = new Date().getFullYear()
  
  return `The year is ${year}`
  // return `The year is ${new Date().getFullYear()}`
}
getMessage()

const device_id = 5
const guid = 10
const username = 'alice'

// ES5
//var data = '{"device_id": "' + device_id + '", "guid": "' + guid + '", "username": "' + username + '"}'

// ES6
let data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}"}`

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
