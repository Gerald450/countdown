'use client'
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";

export default function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-09-05T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());



  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 gap-10 sm:p-20 bg-pink-50 text-gray-800">
      <h1 className="text-4xl sm:text-6xl font-bold text-center text-rose-600">
        Next stop: You & Me 🫶🏾
      </h1>
      <Card className="bg-white/80 shadow-xl backdrop-blur-md border-pink-200">
        <CardContent className="flex flex-col items-center p-10 text-center">
          <div className="text-2xl sm:text-4xl font-semibold text-rose-500 mb-4">
            {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
          </div>
          <p className="text-md sm:text-lg text-gray-600 italic">
            I can&apos;t wait to hold you again on September 5th 💖
          </p>
          <img src="holding_hands3.jpeg" height={200} width={200} className="heart-clip" />
          {/* <Image

            src="/holding_hands3.jpeg"
            alt="holding hands with my girl"
            height={200}
            width={200}
            className="heart-clip"
          
          /> */}
        </CardContent>
      </Card>
     <footer className="text-md sm:text-lg text-gray-600 italic">
      Created By Your Mans
     </footer>

  
    </div>
  );
}
