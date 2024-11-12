// Part (a)
const fs = require("fs");
let readStream = fs.createReadStream("input.txt", "utf-8");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);

readStream.on("error", (err) => {
  console.log("Error loading input file:", err);
});

writeStream.on("finish", () => {
  console.log("Content copied to output.txt");

  // Part (b)
  let outputReadStream = fs.createReadStream("output.txt", "utf-8");
  outputReadStream.on("data", (chunk) => {
    const lines = chunk.split("\n");
    lines.forEach((line) => {
      console.log(line);
    });
  });

  outputReadStream.on("error", (err) => {
    console.error("Error reading file:", err);
  });

  outputReadStream.on("end", () => {
    console.log("Finished reading output.txt");
  });
});
