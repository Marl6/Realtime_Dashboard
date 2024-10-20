'use client'

import { BarChart } from '@tinybirdco/charts'

export function BusiestAirportsBasedOnNumberOfFlights() {
  return (
    <BarChart
      endpoint="https://api.us-east.tinybird.co/v0/pipes/FlightData2.json"
      token = "p.eyJ1IjogImMwNmYwZGJkLWUzNDYtNGQ2NS04MjRiLTk1MTdjZTY4MmVhNCIsICJpZCI6ICJhNmEyNmViMi1lMWQ1LTRjYTUtOTkxNC1kYzNlZGQwYmZhNTQiLCAiaG9zdCI6ICJ1c19lYXN0In0.HpVNedCmMGypkV4PZbue27mGzH4CWUX_J-7RnKYvM8o"
      index="airport"
      categories={['total_departures']}
      colorPalette={['#FF69B4']}
      title="Busiest Airports based on number of flights"
      showLegend={true}
      height="500px"
    />
  )
}