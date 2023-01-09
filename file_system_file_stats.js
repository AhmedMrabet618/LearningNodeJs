/*File stats*/
/*
Sometimes, we need to do more than just read or write to a file. 
The fs module has a stat method that provides us with a lot of useful information about files. Let’s see how it works.
*/

const fs = require('fs')

fs.stat('test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stats)
})
