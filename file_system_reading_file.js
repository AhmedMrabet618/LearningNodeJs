/*Reading files*/
/*
The fs module provides an easy way to read files using the fs.readFile method. 
It is passed a file path, optional arguments, such as encoding, and a callback function that will be called with data read from the file. 
Let’s look at both the asynchronous and synchronous versions of this method.
*/
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


/*
We need to import the fs module in order to use the readfile method. Both codes read from the test.txt file. This is the first argument passed to both methods. The second argument we passed is the encoding, utf-8 in our case. This ensures that the file is read in the same way it was stored.

The readFile method is asynchronous and, hence, takes a completion callback as its last argument. This callback takes an err as an exception. If no exception occurs, this will be either null or undefined. The second argument of this callback is data. This represents the data that is read from the file. Since this is asynchronous, the process does not block and we see our Hello! before the file data.
The readFileSyncmethod,as the name suggests, is synchronous. We have placed this in a try catch block, as it is good coding practice and shall keep the process from terminating in case we are unable to read the file. Unlike the asynchronous method, this blocks the program until the file is read. This is why we see the file data first, followed by the Hello! in our output.
Both of these methods read the entire file into memory before they return. For very large files, this may impact our system memory consumption.

Try changing the arguments passed to both code examples to see how the output might change.

*/
