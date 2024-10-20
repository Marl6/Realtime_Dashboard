'use client'

import { BarList } from '@tinybirdco/charts'

export function BusiestDayOfTheWeek() {
  return (
    <BarList
      endpoint="https://api.us-east.tinybird.co/v0/pipes/FlightData4.json"
      token = "p.eyJ1IjogImMwNmYwZGJkLWUzNDYtNGQ2NS04MjRiLTk1MTdjZTY4MmVhNCIsICJpZCI6ICJhZDI0NmZmYi05MjJhLTQ3MmItOTYwOS1mNWIzNDRmNzg5MDMiLCAiaG9zdCI6ICJ1c19lYXN0In0.WIVjyqkJoncEmUWtmzHUf_a3kg9qO-XnmwhaFo3eOtY"
      index="day_of_week"
      categories={['total_flights']}
      colorPalette={['#FF69B4']}
      title="Busiest Day of the Week"
      description="1 (monday) to 7 (sunday)"
      showLegend={true}
      height="500px"
    />
  )
}