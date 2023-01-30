import { useState, useEffect } from "react";
import AnalogClock from "./AnalogClock";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  let YMDT = new Date();
  let year = YMDT.getFullYear();
  let month = YMDT.getMonth() + 1;
  let date = YMDT.getDate();
  let day = YMDT.getDay();

  if (day === 0) day = "일";
  else if (day === 1) day = "월";
  else if (day === 2) day = "화";
  else if (day === 3) day = "수";
  else if (day === 4) day = "목";
  else if (day === 5) day = "금";
  else if (day === 6) day = "토";

  let finalDate = String(year) + "." + String(month) + "." + String(date) + " (" + day + ")";

  return (
    <div>
      <h2>
        <span>{time.toLocaleTimeString()}</span>
      </h2>
      <h4>
        <span>
          {finalDate} <br />
        </span>
      </h4>
    </div>
  );
}
