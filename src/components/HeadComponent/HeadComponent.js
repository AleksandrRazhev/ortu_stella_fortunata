import Head from "next/head";

export default function HeadComponent(props) {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content="kennel" />
      <meta name="description" content="Ortu Stella Fortunata kennel" />
      <meta charSet="utf-8" />
    </Head>
  )
}
