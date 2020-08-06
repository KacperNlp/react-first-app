import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    author: "Adam Nowicki",
    title: "Jak programować w JS",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptates, magni est hic minus ea nobis esse itaque impedit sed ut ratione vitae voluptatum odit totam distinctio a aliquam. In.",
  },
  {
    id: 2,
    author: "Kacper Boborek",
    title: "Programowanie w Python i C++",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptates, magni est hic minus ea nobis esse itaque impedit sed ut ratione vitae voluptatum odit totam distinctio a aliquam. In.",
  },
  {
    id: 3,
    author: "Anna Boborek",
    title: "Nowoczesne technologie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptates, magni est hic minus ea nobis esse itaque impedit sed ut ratione vitae voluptatum odit totam distinctio a aliquam. In.",
  },
];
const NewsPage = () => {
  const newses = articles.map((article) => {
    return <Article key={article.id} {...article} />;
  });
  return (
    <>
      <h1>Najnowsze wpisy!</h1>
      <div>{newses}</div>
    </>
  );
};

export default NewsPage;
