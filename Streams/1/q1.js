const fs = require("fs");
const countries = [
  {
    name: "India",
    population: "1.38 billion",
    GDP: "2.87 trillion",
    independence: "1947",
    growthRate: "6.9",
  },
  {
    name: "USA",
    population: "331 million",
    GDP: "21.43 trillion",
    independence: "1776",
    growthRate: "2.3",
  },
  {
    name: "China",
    population: "1.41 billion",
    GDP: "14.34 trillion",
    independence: "1949",
    growthRate: "6.1",
  },
  {
    name: "Brazil",
    population: "213 million",
    GDP: "2.05 trillion",
    independence: "1822",
    growthRate: "1.1",
  },
  {
    name: "Australia",
    population: "26 million",
    GDP: "1.39 trillion",
    independence: "1901",
    growthRate: "2.8",
  },
];
const writeStream = fs.createWriteStream("countries.txt");
countries.forEach((country) => {
  writeStream.write(
    `${country.name}, ${country.population}, ${country.GDP}, ${country.independence}, ${country.growthRate} \n`
  );
});
writeStream.end();
writeStream.on("error", (err) => {
  console.error("Error writing to file:", err);
});
writeStream.on("finish", (err) => {
  console.log("Data written in countries.txt");
});