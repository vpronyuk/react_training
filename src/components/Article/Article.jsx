import css from "./Article.module.css";

export default function Article({article}) {
  return (
    <article className={css.article}>
      <h2>{article.topic}</h2>
      <p>{article.text}</p>
    </article>
  );
}
