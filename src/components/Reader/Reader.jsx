import { useState } from "react";
import css from "./Reader.module.css";
import Progress from "../Progress/Progress.jsx";
import Controls from "../Controls/Controls.jsx";
import Article from "../Article/Article.jsx";

export default function Reader({ articles }) {
  const [articleIdx, setArticleIdx] = useState(0);

  const handlePrev = () => {
    setArticleIdx(articleIdx - 1);
  };
  const handleNext = () => {
    setArticleIdx(articleIdx + 1);
  };

  const currentArticle = articles[articleIdx];
  const isFirst = articleIdx === 0;
  const isLast = articleIdx === articles.length - 1;

  return (
    <div className={css.container}>
      <h1 className={css.headTitle}>Reader (App)</h1>
      <header className={css.headerBody}>
        <p>Controls</p>
        <Controls
          onPrev={handlePrev}
          isFirst={isFirst}
          onNext={handleNext}
          isLast={isLast}
        />
        <Progress current={articleIdx + 1} total={articles.length} />{" "}
      </header>
      <main className={css.mainBody}>
        <Article article={currentArticle} />
      </main>
    </div>
  );
}
