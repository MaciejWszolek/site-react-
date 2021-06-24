import React from "react"
import Article from "../../components/Article"
const HomePage = () => {
  const articles = [
    {
      id: 1,
      title: "Co to jest struna",
      author: "Maciej Szołek",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam voluptatibus iusto quasi sunt exercitationem labore corporis deleniti deserunt debitis ducimus, fuga soluta velit. Sunt hic sit quod ipsam sapiente.",
    },
    {
      id: 2,
      title: "gdzie jest krzywa",
      author: "Daszer",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam voluptatibus iusto quasi sunt exercitationem labore corporis deleniti deserunt debitis ducimus, fuga soluta velit. Sunt hic sit quod ipsam sapiente.",
    },
    {
      id: 3,
      title: "bjyc",
      author: "Danielek",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam voluptatibus iusto quasi sunt exercitationem labore corporis deleniti deserunt debitis ducimus, fuga soluta velit. Sunt hic sit quod ipsam sapiente.",
    },
  ]
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ))
  return (
    <>
      <div className="home"></div>
      {artList}
    </>
  )
}

export default HomePage
