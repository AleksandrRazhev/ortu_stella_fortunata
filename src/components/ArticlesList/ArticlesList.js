import { useState, useEffect } from "react";

import Article from "../Article/Article"
import useArticlesService from "../../services/useArticlesService";

import style from './ArticlesList.module.scss';

export default function ArticlesList() {

  const [data, setData] = useState([]);

  const { getArticles } = useArticlesService();

  useEffect(() => {
    getArticles()
      .then(articles => setData(articles));
  }, [])

  const items = () => (
    <ul className={style.list}>
      {data.map(item => (
        <Article key={item.id} data={item} />
      ))}
    </ul>
  );

  return (
    <>
      <h1 className={style.title}>Новости питомника Ortu Stella Fortunata</h1>
      {data ? items() : null}
    </>
  )
}
