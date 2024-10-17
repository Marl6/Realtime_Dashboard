'use client'

import { Table } from '@tinybirdco/charts'

export function TopMovers() {
  return (
    <Table
      endpoint="https://api.us-east.tinybird.co/v0/pipes/StockPricesKaggle4.json"
      token = "p.eyJ1IjogImMwNmYwZGJkLWUzNDYtNGQ2NS04MjRiLTk1MTdjZTY4MmVhNCIsICJpZCI6ICIxYmZlYWFhNi1hZWVmLTQ2ZDAtYTk4MC0xZmYwZTYxNjU2YjUiLCAiaG9zdCI6ICJ1c19lYXN0In0.L4SZqfTlyi_vvmn6C5TfoQN13Tq1ZUnt6aZ7SLfZgJU"
      categories={['brand_name', 'max_price', 'min_price', 'percentage_change']}
      title="Top Movers"
      height="500px"
    />
  )
}