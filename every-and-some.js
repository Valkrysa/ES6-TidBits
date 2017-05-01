var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
]

var allComputersCanRunProgram = true
var someComputersCanRunProgram = false

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i]
  
  if (computer.ram < 16) {
    allComputersCanRunProgram = false
  } else {
    someComputersCanRunProgram = true
  }
}

allComputersCanRunProgram = computers.every(function (computer) {
  return computer.ram > 16
})

someComputersCanRunProgram = computers.some(function (computer) {
  return computer.ram > 16
})

var names = [
  'Alexandria',
  'Matthew',
  'Joe'
]

names.every(function (name) {
  return name.length > 4
})

names.some(function (name) {
  return name.length > 4
})

function Field (value) {
  this.value = value
}

Field.prototype.validate = function validate () {
  return this.value.length > 0
}

var username = new Field('2cool')
var password = new Field('my_password')
var birthdate = new Field('10/10/2010')

var fields = [username, password, birthdate]

var formIsValid = fields.every(function (field) {
  return field.validate()
})

if (formIsValid) {
  // allow user to submit
} else {
  // show error message
}

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function (user) {
    return user.hasSubmitted
});

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function (request) {
    return request.status === 'pending'
});
