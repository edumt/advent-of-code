import fs from 'fs';

const readInput = (path?: string) => fs.readFileSync(path ? path : '../input.txt', 'utf8')
const cleanInputData = (inputData: string) =>inputData.split('\r\n').map(Number)
const solution = () => {
  const cleanedData = cleanInputData(readInput())
  return cleanedData.reduce((obj, measurement: number, idx, data) => {
    if (idx > data.length -3) return obj

    const slidingMeasurement = measurement + data[idx+1]! + data[idx+2]!
    if (idx !== 0 && slidingMeasurement > obj.lastMeasurement!) {
      obj.increases++
    }
    obj.lastMeasurement = slidingMeasurement
    return obj
  }, {increases: 0, lastMeasurement: cleanedData[0]!+cleanedData[1]!+cleanedData[2]!})
}

console.log(solution())