import 'react-app-polyfill/ie11'
import React from 'react'

import AvailableStations from './components/AvailableStations'
import FindStationForm from './components/Form'
import GithubLink from './components/GithubLink'
import SampleResult from './components/SampleResult'
import './tailwind.output.css'

const App = () => {
  return (
    <div className="h-screen flex justify-center p-2 bg-gray-100">
      <div>
        <AvailableStations />
        <FindStationForm />
        <SampleResult x={'0'} y={'0'} />
        <SampleResult x={'100'} y={'100'} />
        <SampleResult x={'15'} y={'10'} />
        <SampleResult x={'18'} y={'18'} />
        <GithubLink />
      </div>
    </div>
  )
}

export default App
