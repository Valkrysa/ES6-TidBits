function makeAjaxRequestV1 (url, method) {
  if (!method) {
    method = 'GET'
  }
  return method
}

function makeAjaxRequest (url, method = 'GET') {
  return method
}

makeAjaxRequestV1('google.com')
makeAjaxRequestV1('google.com', null)
makeAjaxRequestV1('google.com', 'POST')
makeAjaxRequest('google.com')
makeAjaxRequest('google.com', null)
makeAjaxRequest('google.com', 'POST')

function User (id) {
  this.id = id
}

function generateId () {
  return Math.random() * 9999999
}

function createAdminUser (user = new User(generateId ())) {
  user.admin = true
  
  return user
}

createAdminUser()

function sumV1(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}

function sum (a = 0, b = 0) {
  return a + b
}

function addOffsetV1(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}

function addOffset (style = {}) {
  style.offset = '10px';
  
  return style;
}
