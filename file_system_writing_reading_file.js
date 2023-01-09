/*Writing to files*/
/*
We can write to files in a similar manner as reading them. 
The aptly named writeFile and the writeFileSync methods can be used for this job. Let’s look at the code below.
*/
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

/*
We are writing to the file named test.txt. To check that the file was indeed written to, we read it again and output its content. 
What if we want to overwrite a file, or perhaps, create a file if it does not exist before writing to it? For these, we have flags. 
Flags are optional parameters passed to different methods of the fs module. 
These allow us to dictate how we would like to interact with the file. Check out all of the flags available here: https://nodejs.org/api/fs.html#fs_file_system_flags.
*/
