import fs from "fs";

const readInput = (path?: string) =>
  fs.readFileSync(path ? path : "./../input.txt", "utf8");

const cleanInputData = (inputData: string) =>
  inputData.split("\r\n").map((row) => row.split(" "));

const solution = () => {
  const cleanedData = cleanInputData(readInput());
  return true;
};

console.log(solution());
