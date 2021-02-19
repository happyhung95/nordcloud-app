import { stations } from '../constants'
import { Station, ClosestStation } from '../types'

export const calculateDistance = (xStart: number, xEnd: number, yStart: number, yEnd: number) => {
  const xDistance: number = Math.pow(xEnd - xStart, 2)
  const yDistance: number = Math.pow(yEnd - yStart, 2)

  return Math.sqrt(xDistance + yDistance)
}

export const findStation = (x: string, y: string): ClosestStation => {
  let shortestDistance: number
  let closestStation: Station | undefined
  let stationPower = 0

  stations.map(station => {
    const distance = calculateDistance(parseInt(x), station.x, parseInt(y), station.y)

    const power = distance > station.r ? 0 : Math.pow(station.r - distance, 2)

    if (power > 0 && (distance < shortestDistance || shortestDistance === undefined)) {
      shortestDistance = distance
      closestStation = station
      stationPower = power
    }
  })

  return { closestStation, stationPower }
}
