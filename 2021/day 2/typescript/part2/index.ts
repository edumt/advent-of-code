import fs from "fs";

const readInput = (path?: string) =>
  fs.readFileSync(path ? path : "./../input.txt", "utf8");

const cleanInputData = (inputData: string) =>
  inputData.split("\r\n").map((row) => row.split(" "));

const solution = () => {
  const cleanedData = cleanInputData(readInput());
  const initialPosition = { horizontal: 0, depth: 0 };
  const position = cleanedData.reduce((position, command, idx) => {
    const units = Number(command[1]);
    switch (command[0]) {
      case "forward":
        position.horizontal += units;
        break;
      case "down":
        position.depth += units;
        break;
      case "up":
        position.depth -= units;
        break;
    }

    return position;
  }, initialPosition);

  return position.horizontal * position.depth;
};

console.log(solution());
