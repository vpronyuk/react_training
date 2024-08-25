import { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(Date.now());
    }, 1000);

    return () => {
      console.log("cleanup");
      clearInterval(id);
    };
  }, []);
  return <div>Timer</div>;
}
