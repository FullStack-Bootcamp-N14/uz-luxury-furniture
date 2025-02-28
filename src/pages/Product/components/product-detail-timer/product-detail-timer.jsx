import React, { useEffect, useState } from "react";

export const ProductDetailTimer = ({ expires_in }) => {
  const targetDate = new Date(expires_in);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expires_in]);

  return (
    <>
      <ul className="flex gap-[16px]">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <li key={unit} className="text-center">
            <div className="bg-[#F3F5F7] w-[60px] h-[55px] flex items-center justify-center">
              <h3 className="font-medium text-[34px] text-[#141718]">
                {value}
              </h3>
            </div>
            <p className="font-normal text-[12px] leading-[167%] text-[#6C7275]">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
