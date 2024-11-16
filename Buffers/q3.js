// create two buffers from strings
const buffer1 = Buffer.from("JavaScript is easy");
const buffer2 = Buffer.from("We are learning and understanding");
// concatenate them
let buffer = Buffer.concat([buffer1, buffer2]);
// print length of final buffer
console.log(buffer.length);
// extract "easy" from buffer and convert to string
console.log(buffer.slice(14, 18).toString());