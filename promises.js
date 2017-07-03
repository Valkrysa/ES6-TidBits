promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 3000)
})

promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log('I was also run'))
  .catch(() => console.log('Something bad happened'))



url = 'https://jsonplaceholder.typicode.com/posts/'

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('BAD', error))
