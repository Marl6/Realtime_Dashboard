'use client'

import { Table } from '@tinybirdco/charts'

export function StockVolumePerCompany() {
  return (
    <Table
      endpoint="https://api.us-east.tinybird.co/v0/pipes/StockPricesKaggle.json"
      token = "p.eyJ1IjogImMwNmYwZGJkLWUzNDYtNGQ2NS04MjRiLTk1MTdjZTY4MmVhNCIsICJpZCI6ICJmZGJiMWVlZS05NmJhLTQ2ZTYtODQxZS1mYTAxNzVhMGRiNDIiLCAiaG9zdCI6ICJ1c19lYXN0In0.-W9IJE3mmHbDEzlvN7I64hCGeIVSLTkwz6YrZPi9voY"
      categories={['brand_name', 'country', 'total_volume']}
      title="Stock Volume per company"
      height="500px"
    />
  )
}