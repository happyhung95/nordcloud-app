import React from 'react'

import { stations } from '../../constants'

const AvailableStations: React.FC = () => (
  <div className="my-4 p-4 bg-blue-100 rounded-xl">
    <div className="mb-1 text-blue-900 text-xl font-bold">List of available stations' coordinate:</div>
    {stations.map((station, index) => (
      <div key={index}>
        <span className="text-blue-900 font-bold">Station {index + 1}: </span>
        <span className="text-blue-900">
          ({station.x},{station.y}).{' '}
        </span>
        <span className="text-blue-900">Reach {station.r}.</span>
      </div>
    ))}
  </div>
)

export default AvailableStations
