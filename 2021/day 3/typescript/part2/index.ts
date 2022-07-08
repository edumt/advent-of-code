import fs from "fs";

const readInput = (path?: string) =>
  fs.readFileSync(path ? path : "../input.txt", "utf8");

const cleanInputData = (inputData: string) => inputData.split("\r\n");

const filterByBit = (bitsList: string[], bit: string, idx: number): string[] =>
  bitsList.filter((bits) => bits[idx] === bit);

const getRate = (bitsData: string[], mode: number): string => {
  // mode === 0 -> oxygen rate
  // mode === 1 -> co2 rate
  if (!bitsData[0]) new Error("no data provided");

  for (let bitIndex = 0; bitIndex < bitsData[0].length; bitIndex++) {
    if (bitsData.length === 1) break;

    let frequency = 0;
    for (let word = 0; word < bitsData.length; word++) {
      if (bitsData[word][bitIndex] === "1") frequency += 1;
      else frequency -= 1;
    }

    if (frequency >= 0)
      bitsData = filterByBit(bitsData, (1 - mode).toString(), bitIndex);
    else bitsData = filterByBit(bitsData, mode.toString(), bitIndex);
  }
  return bitsData[0];
};

const solution = () => {
  const cleanedData = cleanInputData(readInput());
  const oxygenRate = getRate(cleanedData, 0);
  const co2Rate = getRate(cleanedData, 1);
  return parseInt(oxygenRate, 2) * parseInt(co2Rate, 2);
};

console.log(solution());
