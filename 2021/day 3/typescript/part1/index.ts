import fs from "fs";

const readInput = (path?: string) =>
  fs.readFileSync(path ? path : "./../input.txt", "utf8");

const cleanInputData = (inputData: string) => inputData.split("\r\n");

const getRates = (bitsData: string[]) => {
  if (!bitsData[0]) new Error("no data provided");

  let gammaRate = "";
  let epsilonRate = "";
  const bitsLength = bitsData[0].length;
  for (let bitIndex = 0; bitIndex < bitsLength; bitIndex++) {
    let frequency = 0;
    for (let word = 0; word < bitsData.length; word++) {
      if (bitsData[word][bitIndex] === "1") frequency += 1;
      else frequency -= 1;
    }
    if (frequency >= 0) {
      gammaRate += "1";
      epsilonRate += "0";
    } else {
      gammaRate += "0";
      epsilonRate += "1";
    }
  }

  return [gammaRate, epsilonRate];
};

const solution = () => {
  const cleanedData = cleanInputData(readInput());
  const [gammaRate, epsilonRate] = getRates(cleanedData);
  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

console.log(solution());
