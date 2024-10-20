'use client'

import { BarList } from '@tinybirdco/charts'

export function BusiestAirline() {
  return (
    <BarList
      endpoint="https://api.us-east.tinybird.co/v0/pipes/FlightData3.json"
      token = "p.eyJ1IjogImMwNmYwZGJkLWUzNDYtNGQ2NS04MjRiLTk1MTdjZTY4MmVhNCIsICJpZCI6ICI2NmIwZjA4Ni1jM2Q5LTQ1M2YtYjIyMS1jNzZiMDVkZmQzMGYiLCAiaG9zdCI6ICJ1c19lYXN0In0.kRodDhukCAArvVD9hx-zGoTpeaoD_mhwH-l3tWj47Kc"
      index="airline"
      categories={['total_flights']}
      colorPalette={['#FF69B4']}
      borderRadius="0px"
      title="Busiest Airline"
      height="500px"
    />
  )
}