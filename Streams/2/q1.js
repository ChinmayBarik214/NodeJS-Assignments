const fs = require("fs");
let readStream = fs.createReadStream("input.txt", "utf-8");
const writeStream = fs.createWriteStream("output.txt");
readStream.pipe(writeStream);
readStream.on("error", (err) => {
  console.log("Error laoding input file:", err);
});
writeStream.on("finish", () => {
  console.log("Content copied to output.txt");
});
// (b)
readStream = fs.createReadStream('output.txt', 'utf-8');
readStream.on('data', (chunk) => {
  const lines = chunk.split('\n');
  lines.forEach(line => {
    console.log(line);
  });
});
readStream.on("error", (err) => {
  console.error("Error on reading file:", err);
});
readStream.on("end", () => {
  console.log("Finished reading output.txt");
});