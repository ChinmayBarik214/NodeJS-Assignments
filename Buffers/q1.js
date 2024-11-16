const buffer = Buffer.from([72, 69, 89, 33, 32, 66, 85, 70, 70, 69, 82, 83]);
// (a) print length to console
console.log("The length of the buffer is: " + buffer.length);
// (b) 6th and 8th index values are
console.log("value at index 6 of buffer is: " + buffer[6]);
console.log("value at index 8 of buffer is: " + buffer[8]);
// (c) changing value at index 2 from 89 to 23
buffer[2] = 23;
// print the modified buffer
console.log(buffer);
// check value at index 2
console.log(buffer[2]);