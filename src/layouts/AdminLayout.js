import PageTemplate from "./PageTemplate/PageTemplate";
import Admin from "../components/Admin/Admin";

export default function AdminLayout() {

  return (
    <PageTemplate title={'Страница администратора'}>
      <Admin />
    </PageTemplate>
  )
}
