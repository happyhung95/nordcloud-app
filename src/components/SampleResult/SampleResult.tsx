import React from 'react'

import { findStation } from '../../services'
import { Coordinate } from '../../types'

const SampleResult: React.FC<Coordinate> = ({ x, y }) => {
  const { closestStation, stationPower } = findStation(x, y)

  return (
    <div className="my-2">
      <div className="text-blue-900 font-bold">
        Sample calculation for coordinate ({x},{y}):
      </div>
      {stationPower !== 0 ? (
        <div className="px-2 py-1 bg-blue-100 rounded text-blue-900 font-medium">
          Best link station for point ({x},{y}) is ({closestStation?.x},{closestStation?.y}) with power {stationPower}.
        </div>
      ) : (
        <div  className="px-2 py-1 bg-red-100 rounded text-red-500 font-medium">
          No link station within reach for point ({x},{y}).
        </div>
      )}
    </div>
  )
}

export default SampleResult
