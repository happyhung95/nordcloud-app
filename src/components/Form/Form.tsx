import React, { useState } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { findStation } from '../../services'
import { Station, Coordinate } from '../../types'

const FindStationForm: React.FC = () => {
  const [station, setStation] = useState<Station>()
  const [stationPower, setStationPower] = useState<number>(0)
  const [coordinate, setCoordinate] = useState<Coordinate>()

  const validateNumber = (input: string) => {
    let error
    if (isNaN(Number(input))) {
      error = 'Please input a number!'
    }
    return error
  }

  return (
    <div className="my-4 p-4 border-2 border-blue-900 rounded-xl">
      <div className="mb-2 text-blue-900 text-xl font-bold">Find a link station</div>
      <Formik
        initialValues={{
          x: '',
          y: '',
        }}
        onSubmit={(values: Coordinate, { setSubmitting }: FormikHelpers<Coordinate>) => {
          const { closestStation, stationPower } = findStation(values.x, values.y)

          if (stationPower > 0) {
            setStation(closestStation)
            setStationPower(stationPower)
          } else {
            setStation(undefined)
            setStationPower(0)
          }

          setCoordinate(values)
          setSubmitting(false)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="x" className="text-blue-900">x coordinate: </label>
              <Field id="x" name="x" validate={validateNumber} className="px-2 rounded-lg text-gray-500 text-md" />
              {errors.x && touched.x && <div className="mb-2 text-red-500 text-sm">{errors.x}</div>}
            </div>
            <div className="mt-2">
              <label htmlFor="y" className="text-blue-900">y coordinate: </label>
              <Field id="y" name="y" validate={validateNumber} className="px-2 rounded-lg text-gray-500 text-md" />
              {errors.y && touched.y && <div className="mb-2 text-red-500 text-sm">{errors.y}</div>}
            </div>

            <button type="submit" className="my-2 px-2 py-1 rounded-xl bg-blue-900 text-white text-md font-medium">Find nearest station</button>
          </Form>
        )}
      </Formik>
      {coordinate && stationPower !== 0 && (
        <div className="px-2 py-1 bg-blue-100 rounded text-blue-900 font-medium">
          Best link station for point ({coordinate?.x},{coordinate?.y}) is ({station?.x},{station?.y}) with power {stationPower}.
        </div>
      )}
      {coordinate && !stationPower && (
        <div className="px-2 py-1 bg-red-100 rounded text-red-500 font-medium">
          No link station within reach for point ({coordinate?.x},{coordinate?.y}).
        </div>
      )}
    </div>
  )
}

export default FindStationForm
