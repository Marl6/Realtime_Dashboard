'use client'

import { PieChart } from '@tinybirdco/charts'

export function NumberOfCompaniesPerCountry() {
  return (
    <PieChart
      endpoint="https://api.us-east.tinybird.co/v0/pipes/StockPricesKaggle5.json"
      token = "p.eyJ1IjogImMwNmYwZGJkLWUzNDYtNGQ2NS04MjRiLTk1MTdjZTY4MmVhNCIsICJpZCI6ICJmMzc4YzEyMS03Y2Q3LTQ2YzctOTNiMS1jZjhhYTU4ZmI0MDciLCAiaG9zdCI6ICJ1c19lYXN0In0.JKHd6ZYLLIfFLsA3uX_-e_NJULXM3Uo2OvdCsU4xHQA"
      index="country"
      categories={['number_companies']}
      colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Number of Companies per Country"
      height="500px"
    />
  )
}