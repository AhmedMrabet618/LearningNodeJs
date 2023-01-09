const fs = require('fs')

/*------------synchronous------------*/ 
fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

console.log("Hello!")

/*------------asynchronous------------*/ 
const fs = require('fs')

try {
  const data = fs.readFileSync('test.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}

console.log("Hello!")
