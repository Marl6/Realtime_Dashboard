'use client'

import { AreaChart } from '@tinybirdco/charts'

export function AverageStockPricePerIndustryInDollars() {
  return (
    <AreaChart
      endpoint="https://api.us-east.tinybird.co/v0/pipes/StockPricesKaggle3.json"
      token = "p.eyJ1IjogImMwNmYwZGJkLWUzNDYtNGQ2NS04MjRiLTk1MTdjZTY4MmVhNCIsICJpZCI6ICIyYmE4NzljNC1iZGE1LTRhZDQtODk0Zi00Y2Y0OTFhNmMxZGEiLCAiaG9zdCI6ICJ1c19lYXN0In0.9AoIrLxgeCOFItKvOz2McozJMYEPHP3aPN7zgy02Ymw"
      index="industry_tag"
      categories={['avg_close_price']}
      colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Average Stock Price per industry in dollars"
      height="500px"
    />
  )
}