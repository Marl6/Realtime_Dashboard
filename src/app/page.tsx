// Import necessary modules
'use client'; // This should be at the top of the file

import Image from "next/image";
import { FlightData } from "./components/FlightData";
import { BusiestAirportsBasedOnNumberOfFlights } from "./components/BusiestAirport"; // Import the component
import { BusiestAirline } from "./components/BusiestAirline"; // Import the component
import { BusiestDayOfTheWeek } from "./components/BusiestDay"; // Import the component
import { NUMBEROFFLIGHTS } from "./components/NumberOfFlights"; // Import the component
import { useState } from "react";

export default function Home() {
  const [dateRange, setDateRange] = useState({ from: "2000-01-01", to: "2024-12-31" });

  const handleDateChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setDateRange((prevRange) => ({ ...prevRange, [name]: value }));
  };

  return (
    <main className="mx-auto w-full lg:w-3/4 p-4">
      <h1 className="text-3xl font-bold text-center my-8">Flight Record Dashboard of the Philippines</h1>

      {/* Grid layout for charts */}

      <div className="my-8 p-4 bg-white shadow-lg rounded-lg flex justify-between gap-4 w-full">
        <div className="p-4 bg-white shadow-lg rounded-lg w-full">
          <h2 className="text-xl font-semibold text-center mb-4">DAILY NUMBER OF FLIGHTS CHART</h2>
          <NUMBEROFFLIGHTS />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">FLIGHTS</h2>
          <FlightData />
        </div>

        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">BUSIEST AIRPORT</h2>
          <BusiestAirportsBasedOnNumberOfFlights />
        </div>
      </div>

      {/* Table for Stock Volume per Company */}
      <div className="my-8 p-4 bg-white shadow-lg rounded-lg flex justify-between gap-4">
        <div className="w-1/2">
          <h2 className="text-xl font-semibold text-center mb-4">BUSIEST AIRLINE </h2>
          <BusiestAirline />
        </div>

        <div className="w-1/2">
          <h2 className="text-xl font-semibold text-center mb-4">BUSIEST DAY OF THE WEEK</h2>
          <BusiestDayOfTheWeek />
        </div>
      </div>

      {/* Error handling and loading indicators */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">Data may take a few seconds to load...</p>
      </div>
    </main>
  );
}
