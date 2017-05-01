function getMessage () {
  const year = new Date().getFullYear()
  
  return `The year is ${year}`
  // return `The year is ${new Date().getFullYear()}`
}
getMessage()
