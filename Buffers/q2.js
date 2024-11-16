// create buffer of size 100
const buffer = Buffer.alloc(100);
// write onto buffer
buffer.write("We are learning buffer module today and enjoying");
// read and print contents
console.log(buffer.toString());