import css from "./App.module.css";
import ClickTracker from "../ClickTracker/ClickTracker";
import Timer from "../Timer/Timer";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={css.container}>
      <ClickTracker />
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Timer />}
    </div>
  );
}
