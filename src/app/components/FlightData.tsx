'use client'

import { Table } from '@tinybirdco/charts'

export function FlightData() {
  return (
    <Table
      endpoint="https://api.us-east.tinybird.co/v0/pipes/FlightData1.json"
      token = "p.eyJ1IjogImMwNmYwZGJkLWUzNDYtNGQ2NS04MjRiLTk1MTdjZTY4MmVhNCIsICJpZCI6ICJjMjJkNDlmYS0xNmQwLTRiNDgtYTZiNi0xMTJiYmZmY2UwODIiLCAiaG9zdCI6ICJ1c19lYXN0In0.OhRvoqZx_0t4ThgvqCK0exyxJxWic6miZpIejvYit3I"
      categories={['flight_date', 'airline', 'flight_from', 'flight_to', 'total_passengers']}
      groupBy="airline"
      title="Flight Data"
      height="500px"
    />
  )
}