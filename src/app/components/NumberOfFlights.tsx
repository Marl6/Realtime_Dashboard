'use client'

import { LineChart } from '@tinybirdco/charts'

export function NUMBEROFFLIGHTS () {
  return (
    <LineChart
      endpoint="https://api.us-east.tinybird.co/v0/pipes/FlightData5.json"
      token = "p.eyJ1IjogImMwNmYwZGJkLWUzNDYtNGQ2NS04MjRiLTk1MTdjZTY4MmVhNCIsICJpZCI6ICJlODJjZGFkNi1jMWEyLTRiMzQtODE2ZS0yMTUxMDEyMzg3ODciLCAiaG9zdCI6ICJ1c19lYXN0In0.dYR4JYRATYFydj2puudI3KuW4jNw2OFOhml82nAhdug"
      index="flight_date"
      categories={['flight_date', 'daily_flights']}
      colorPalette={['#FF69B4']}
      title="NUMBER OF FLIGHTS "
      height="500px"
    />
  )
}