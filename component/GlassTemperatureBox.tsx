"use client";
import { useState, useEffect } from 'react';

const GlassTemperatureBox = () => {
  const [temp, setTemp] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTemp = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=30.51906058537339&lon=79.13314249366522&units=metric&appid=34ae436b8e2968853e08fed0654a37cd`
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();

      if (!data.main || typeof data.main.temp !== 'number') {
        throw new Error('Invalid temperature data');
      }

      setTemp(Math.round(data.main.temp));
      setError(null);
    } catch (e) {
      if (e instanceof Error) {
        console.error("Fetch error:", e.message);
        setError(e.message);
      } else {
        console.error("Unknown error:", e);
        setError("An unexpected error occurred");
      }
      setTemp(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemp();
    const interval = setInterval(fetchTemp, 900000); // Refresh every 15 min
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-md bg-white/70 backdrop-blur-[3.5px] font-[ReadexPro-Light] shadow-md border border-white/30
        w-[200px] sm:w-[320px] md:w-[360px] lg:w-[340px]
        h-32 sm:h-36 md:h-40 lg:h-36
        px-4 sm:px-6 md:px-8 lg:px-[70px]
        py-4 sm:py-5 md:py-10 lg:py-[40px]">
        
        {loading ? (
          <div className="h-10 w-16 bg-white/30 rounded animate-pulse mx-auto"></div>
        ) : error ? (
          <p className="text-[#bd1d76] text-center text-lg sm:text-xl py-4">Weather service down</p>
        ) : (
          <div className="text-center">
            <div className="text-[#bd1d76] text-xl font-medium mb-1 text-center leading-tight">
              <span className="block sm:inline">Cafe Buransh</span>
              <span className="block sm:inline sm:ml-1">Weather</span>
            </div>
            <p className="text-[#262625] text-4xl font-bold inline-flex items-baseline gap-1 whitespace-nowrap">
              {temp}°c <span className="text-[#262625] text-2xl font-normal">clear</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlassTemperatureBox;
