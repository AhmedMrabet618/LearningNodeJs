/*File descriptors*/
/*
Node.js also provides a way to use file descriptors. 
If you are not familiar with file descriptors, you can simply think of them as a number that the OS uses to keep track of an open file. 
However, the readFile and writeFile methods discussed earlier provide an easier method to read and write to files. 
Let’s see how we can use file descriptors in Node.js.
*/

const fs = require("fs");
var fileName = "test.txt";

fs.stat(fileName, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.open(fileName, "r", (err, fd) => {
    var buffer = Buffer.alloc(stats.size);

    fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer) => {
      var data = buffer.toString("utf8", 0, buffer.length);

      console.log(data);
      
      fs.close(fd, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    });
  });
});

/*
We use the stat method to get the size of the file being read. This size is used to create the buffer.

The open method returns the file descriptor for the file at the path we passed as an argument. The argument r is the file system flag. These flags allow us to access files in different ways. You can read up on all the flags here.

The read function on line 13 takes quite a few arguments. The first one being the file descriptor. The next 4 are options:

-buffer is the Buffer that will be written to once the file descriptor is read. This is the buffer we created on line 11 in our case.
-offset is the offset after which the buffer will be written to. Incase our buffer was not empty, we can specify this offset to begin writing after the previous content. This is 0 in our case.
-length corresponds to the number of bytes to be read. Since we want to read the entire file, we have set this to buffer.length.
-position refers to where to begin reading the file. Setting it to null begins reading from the current file position.
-Finally, a callback function is passed. This function returns an error, bytesRead and buffer. The bytesRead is the number of bytes read into the buffer.

We use the close method to close the file descriptor.

The fs module is a very versatile and easy-to-use module that makes file handling possible with Node.js.
*/
