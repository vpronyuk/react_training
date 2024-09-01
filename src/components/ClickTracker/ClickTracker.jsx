import { useEffect, useState } from "react";

export default function ClickTracker() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("my-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    localStorage.setItem("my-clicks", clicks);
  }, [clicks]);

  // useEffect(() => {
  //   console.log("Only on mount");
  // }, []);

  // useEffect(() => {
  //   console.log("clicks", clicks);
  // }, [clicks]);

  // useEffect(() => {
  //   console.log("date", date);
  // }, [date]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <button onClick={() => setDate(Date.now())}>Date: {date}</button>
    </div>
  );
}
