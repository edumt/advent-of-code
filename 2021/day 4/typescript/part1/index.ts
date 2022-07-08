import fs from "fs";

const readInput = (path?: string) =>
  fs.readFileSync(path ? path : "./../input.txt", "utf8");

const cleanInputData = (inputData: string) => {
  const [numbers, ...rawBoards] = inputData.split("\r\n\r\n");
  // to do: find better method to return boards
  const boards = rawBoards.map((boards) =>
    boards
      .split("\r\n")
      .map((board) => board.split(" ").filter((char) => char !== "")),
  );
  return [numbers, boards];
};

const solution = () => {
  const [numbers, boards] = cleanInputData(readInput());
  return [numbers, ...boards];
};

console.log(solution());
