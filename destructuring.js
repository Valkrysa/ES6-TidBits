// destructuring is one of the most useful ES6 parts

var expense = {
  type: 'Business',
  amount: '$45 USD'
}

// ES5
// var type = expense.type
// var amount = expense.amount

// ES6
// const { type } = expense
// const { amount } = expense
const { type, amount } = expense
type;
amount;

var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}

function fileSummaryV1 (file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`
}
fileSummaryV1(savedFile)

// detructure not just arguments but multiple arguments
function fileSummary ({ name, extension, size }, { color }) {
  return `${color} The file ${name}.${extension} is of size ${size}`
}
fileSummary(savedFile, { color: 'red' })

const companies = [
  'Google',
  'Facebook',
  'Uber'
]

// the old way is doing this
const firstCompany = companies[0]
firstCompany;

// the new way is doing this
// destructuring arrays give you assignment based on position
// name is Google because name is the first listed and Google is the first listed
const [ name, name2, name3 ] = companies
name;
name2;
name3;

// use a rest operator
const [ firstName, ...rest ] = companies
firstName;
rest;

// destructure array and object at the same time
const companiesAdv = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
]

var locationOld = companiesAdv[0].location

// double destructure, gives just mountain view
// [] say go into array and give me the first item, send it to {}
// {} says destructure the item, grabbing the field 'location'
const [{ location }] = companiesAdv
location;

const Google = {
  locations: ['Mountain View', 'New York', 'London']
}
// first destructure the object using {} grab the locations field
// of the locations field, which is an array, destructure it and grab the first element
const { locations: [ locationOf ] } = Google;
locationOf

function signupV1 (username, password) {
  // create new user happens
}
signupV1('myname', 'mypassword')

// suddenly we get a request for more fields

function signupV2 (username, password, email, dateOfBirth, city) {
  // create new user happens
}
// if there lots of other code here, so that we can't glance back up, this would be annoying
signupV2('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York')

const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
}

function signup ({ username, password, email, dateOfBirth, city }) {
  // create user
}
signup(user)

// The API gives us this...
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
]
/*
...but Some Library Expects This
[
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 }
]
*/
// destructure the array item in the first map argument into it's x and y values
// return the object with x and y being both value and name so no colon needed
points.map( ([ x, y ]) => {
	return { x, y }
})

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineerV1(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}
isEngineerV1(profile)

function isEngineer({ title, department } = profile) {
  return title === 'Engineer' && department === 'Engineering';
}
isEngineer(profile)

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
	return { subject, time, teacher }
});
classesAsObject

/*
Input:
double([1,2,3])

Output
[2,4,6]
*/
const numbers = [1, 2, 3];

function double([number, ...numbers]) {
  console.log('test ' + numbers)
  if (numbers.length) {
    return [number * 2, ...double(numbers)]
  } else {
    return [number * 2]
  }	
}
double(numbers)
