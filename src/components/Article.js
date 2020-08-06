import React from "react";
const Article = ({ author, title, content }) => {
  return (
    <article className="new-article">
      <h3>{title}</h3>
      <span>{author}</span>
      <p>{content}</p>
    </article>
  );
};

export default Article;
