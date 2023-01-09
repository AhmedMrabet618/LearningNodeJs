const fs = require('fs')

let content = "This is what will be written to the file"

/*------------synchronous------------*/ 
fs.writeFile('test.txt', content, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("File written!")
})

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

/*------------asynchronous------------*/ 
try {
  fs.writeFileSync('test.txt', content)
  console.log("File written!")
} catch (err) {
  console.error(err)
}

try {
  fs.writeFileSync('test.txt', " continue", { flag: 'a' })
  console.log("File written!")
} catch (err) {
  console.error(err)
}

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
