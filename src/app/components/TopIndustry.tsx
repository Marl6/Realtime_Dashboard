'use client'

import { PieChart } from '@tinybirdco/charts'

export function Top3IndustryInTermsOfVolume() {
  return (
    <PieChart
      endpoint="https://api.us-east.tinybird.co/v0/pipes/StockPricesKaggle2.json"
      token = "p.eyJ1IjogImMwNmYwZGJkLWUzNDYtNGQ2NS04MjRiLTk1MTdjZTY4MmVhNCIsICJpZCI6ICJkY2E2MDMwNC0xOWIyLTQ0ZmMtODY2Zi04OTZiNGQxZjQyYmIiLCAiaG9zdCI6ICJ1c19lYXN0In0.BCy4EJA23BP-0dL_UCqBJ7kEqpNBuNkysbaVMffLZS4"
      index="industry_tag"
      categories={['industry_tag', 'total_volume']}
      colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Top 3 Industry in terms of volume"
      showLegend={true}
      height="500px"
    />
  )
}