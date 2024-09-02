import { useEffect, useState } from "react";

export default function LocalStorageClicker() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    localStorage.setItem("my_clicks", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Click: {clicks}</button>
    </div>
  );
}
