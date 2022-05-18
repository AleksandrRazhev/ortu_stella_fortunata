import PageTemplate from "./PageTemplate/PageTemplate";
import ArticlesList from "../components/ArticlesList/ArticlesList";

export default function NewsLayout() {

  return (
    <PageTemplate title={'Ortu Stella Fortunata'}>
      <ArticlesList/>
    </PageTemplate>
  )
}
