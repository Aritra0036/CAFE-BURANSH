"use client";
import { useState } from "react";
import Button from "./Button";
import { FaCalendarAlt, FaCaretDown } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckInOut = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const toggleCheckIn = () => {
    setShowCheckIn((prev) => !prev);
    setShowCheckOut(false);
    setShowGuests(false);
  };

  const toggleCheckOut = () => {
    setShowCheckOut((prev) => !prev);
    setShowCheckIn(false);
    setShowGuests(false);
  };

  const toggleGuests = () => {
    setShowGuests((prev) => !prev);
    setShowCheckIn(false);
    setShowCheckOut(false);
  };

  return (
    <div className="w-full flex justify-center px-4 relative -top-18 sm:-top-35 md:-top-35 lg:-top-35">
      <div className="bg-white backdrop-blur-md rounded-md shadow-xl p-6 md:p-10 flex flex-col gap-6 items-center w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {/* Check-In */}
          <div className="relative w-full">
            <div
              onClick={toggleCheckIn}
              className="w-full cursor-pointer border border-gray-300 rounded-xl px-4 py-3 bg-white hover:shadow-md transition flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-gray-600" />
                <span className="text-gray-700 font-medium">
                  {checkIn ? checkIn.toDateString() : "Check-In"}
                </span>
              </div>
              <FaCaretDown className="text-gray-600" />
            </div>

            {showCheckIn && (
              <div className="absolute z-50 mt-2 w-full">
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-2">
                  <DatePicker
                    selected={checkIn}
                    onChange={(date) => {
                      setCheckIn(date);
                      setShowCheckIn(false);
                    }}
                    inline
                    minDate={new Date()}
                    calendarClassName="w-full"
                    dayClassName={() =>
                      "w-10 h-10 flex items-center justify-center hover:bg-indigo-100 rounded-full transition"
                    }
                  />
                </div>
              </div>
            )}
          </div>

          {/* Check-Out */}
          <div className="relative w-full">
            <div
              onClick={toggleCheckOut}
              className="flex items-center justify-between cursor-pointer border border-gray-300 rounded-xl px-4 py-3 bg-white hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-gray-600" />
                <span className="text-gray-700 font-medium">
                  {checkOut ? checkOut.toDateString() : "Check-Out"}
                </span>
              </div>
              <FaCaretDown className="text-gray-600" />
            </div>

            {showCheckOut && (
              <div className="absolute z-50 mt-2 w-full">
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-2">
                  <DatePicker
                    selected={checkOut}
                    onChange={(date) => {
                      setCheckOut(date);
                      setShowCheckOut(false);
                    }}
                    inline
                    minDate={checkIn || new Date()}
                    calendarClassName="w-full"
                    dayClassName={() =>
                      "w-10 h-10 flex items-center justify-center hover:bg-indigo-100 rounded-full transition"
                    }
                  />
                </div>
              </div>
            )}
          </div>

          {/* Guests */}
          <div className="relative w-full">
            <div
              onClick={toggleGuests}
              className="flex items-center justify-between cursor-pointer border border-gray-300 rounded-xl px-4 py-3 bg-white hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <HiOutlineUserGroup className="text-gray-600 text-xl" />
                <span className="text-gray-700 font-medium">
                  {adults + children} Guests
                </span>
              </div>
              <FaCaretDown className="text-gray-600" />
            </div>

            {showGuests && (
              <div className="absolute z-50 mt-2 bg-white p-4 rounded-xl shadow-lg w-full space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Adults</span>
                  <input
                    type="number"
                    min={1}
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="w-20 border border-gray-300 rounded px-2 py-1 text-center"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Children</span>
                  <input
                    type="number"
                    min={0}
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="w-20 border border-gray-300 rounded px-2 py-1 text-center"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Button */}
          <div className="w-full flex justify-center md:justify-center">
            <Button
              targetUrl="#contacts"
              className="hover:border hover:rounded-lg hover:border-[#bd1d76] text-white hover:bg-white hover:text-black flex flex-col items-center justify-center font-semibold md:font-bold text-[10px] px-[9px] py-3 md:py-3 md:text-[16px] md:p-[10px] sm:py-3 sm:text-[16px] sm:p-[9px] no-underline w-full h-full"
              buttonName="ENQUIRE NOW"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInOut;
