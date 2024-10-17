// Import necessary modules
'use client'; // This should be at the top of the file

import Image from "next/image";
import { TopMovers } from "./components/DailyPrice";
import { StockVolumePerCompany } from "./components/StockVolume"; // Import the component
import { Top3IndustryInTermsOfVolume } from "./components/TopIndustry"; // Import the component
import { AverageStockPricePerIndustryInDollars } from "./components/AveragePrice"; // Import the component
import { NumberOfCompaniesPerCountry } from "./components/NumCompanies"; // Import the component
import { useState } from "react";

export default function Home() {
  const [dateRange, setDateRange] = useState({ from: "2000-01-01", to: "2024-12-31" });

  const handleDateChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setDateRange((prevRange) => ({ ...prevRange, [name]: value }));
  };

  return (
    <main className="mx-auto w-full lg:w-3/4 p-4">
      <h1 className="text-3xl font-bold text-center my-8">Stock Market Dashboard</h1>

      {/* Date Range Filter */}
      <div className="flex justify-center mb-6">
        <label className="mx-2">
          From:
          <input
            type="date"
            name="from"
            value={dateRange.from}
            onChange={handleDateChange}
            className="border border-gray-300 rounded px-2 py-1 ml-2"
          />
        </label>
        <label className="mx-2">
          To:
          <input
            type="date"
            name="to"
            value={dateRange.to}
            onChange={handleDateChange}
            className="border border-gray-300 rounded px-2 py-1 ml-2"
          />
        </label>
      </div>

      {/* Grid layout for charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">TOP INDUSTRIES</h2>
          <Top3IndustryInTermsOfVolume />
        </div>

        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">TOP COUNTRIES HAVING THE MOST COMPANIES</h2>
          <NumberOfCompaniesPerCountry />
        </div>
      </div>

      {/* Table for Stock Volume per Company */}
      <div className="my-8 p-4 bg-white shadow-lg rounded-lg flex justify-between gap-4">
        <div className="w-1/2">
          <h2 className="text-xl font-semibold text-center mb-4">TOP COMPANIES IN TERMS OF VOLUME </h2>
          <StockVolumePerCompany />
        </div>

        <div className="w-1/2">
          <h2 className="text-xl font-semibold text-center mb-4">AVERAGE STOCK PRICE PER INDUSTRY IN DOLLARS</h2>
          <AverageStockPricePerIndustryInDollars />
        </div>
      </div>

      <div className="my-8 p-4 bg-white shadow-lg rounded-lg flex justify-between gap-4">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">TOP MOVERS</h2>
          <TopMovers />
        </div>

        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Stock Price Chart 1</h2>
          <TopMovers />
        </div>
      </div>

      {/* Error handling and loading indicators */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">Data may take a few seconds to load...</p>
      </div>
    </main>
  );
}
