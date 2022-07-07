import fs from 'fs'

const readInput = (path?: string) => fs.readFileSync(path ? path : '../input.txt', 'utf8')
const cleanInputData = (inputData: string) =>inputData.split('\r\n').map(Number)
const solution = () => {
  const data = cleanInputData(readInput())
  return data.reduce((obj, measurement: number, idx) => {
    if (idx !== 0 && measurement > obj.lastMeasurement!) {
      obj.increases++
    }
    obj.lastMeasurement = measurement
    return obj
  }, {increases: 0, lastMeasurement: data[0]})
}

console.log(solution())