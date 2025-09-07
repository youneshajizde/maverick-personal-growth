"use client";

import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()) , 1000)
    return () => clearInterval(interval)
  } , [])
  return <span className="font-mono hidden sm:text-md bg-secondary p-1.5 rounded-lg text-white">{time.toLocaleTimeString()}</span>
};

export default Clock;
