import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeadComponent from "../../components/HeadComponent/HeadComponent";

export default function PageTemplate(props) {
  const { children, title } = props;
  return (
    <div className="wrapper-page">
      <HeadComponent />
      <Header title={title} />
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
