"use client";

import React, { useState, useEffect } from "react";

const LocalTimer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Function to update the current time every minute
    const updateTimer = () => {
      setCurrentTime(new Date());
    };

    // Get the current time in milliseconds and calculate the milliseconds until the next minute
    const currentTimeInMilliseconds = currentTime.getTime();
    const millisecondsUntilNextMinute =
      60000 - (currentTimeInMilliseconds % 60000);

    // Set a timeout to update the timer at the beginning of the next minute
    const timeoutId = setTimeout(() => {
      updateTimer();
    }, millisecondsUntilNextMinute);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [currentTime]); // Run the effect whenever currentTime changes

  // Get the UTC time by subtracting the timezone offset
  const utcTime =
    currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;

  // Create a new Date object with the adjusted time zone
  const gmtPlus6Time = new Date(utcTime + 3600000 * 6);

  // Format the GMT+6 time to display only hour, minute, and AM/PM indicator
  const hour = gmtPlus6Time.getHours() % 12 || 12; // Convert to 12-hour format
  const minute = gmtPlus6Time.getMinutes();
  const ampm = gmtPlus6Time.getHours() >= 12 ? "PM" : "AM";
  const formattedTime = `${hour}:${minute < 10 ? "0" : ""}${minute} ${ampm}`;

  return isClient && <p>{formattedTime} GMT+6</p>;
};

export default LocalTimer;
