import { useEffect, useState } from "react";
import "./Time.css";
export function Time() {
  const [time, setTime] = useState(new Date());
  const now = new Date();
  const getDay = now.getDay();
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thuresday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = week[getDay];
  const getMonth = new Date().getMonth()
  const month = monthsOfYear[getMonth]
  const getDate = new Date().getDate()
  const getYear = new Date().getFullYear()
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return (
    <div className="time-wrapper">
      <p className="time">{time.toLocaleTimeString()}</p>
      <p className="day">{day}, {getDate}  {month}  {getYear}</p>
    </div>
  );
}
