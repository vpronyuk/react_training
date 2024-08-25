import { useState } from "react";
import Reader from "../Reader/Reader";
import articlesData from "../articles.json";

import css from "./App.module.css";
import HideShow from "../HideShow/HideShow";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={css.container}>
      <Reader articles={articlesData} />
      <HideShow onToggle={handleToggle} isVisible={isVisible} />
    </div>
  );
}
