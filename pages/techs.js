import Layout from "../components/layout";
import Head from "next/head";

export default function Techs () {
  return(
    <Layout>
      <Head>
        <title>나의 포트폴리오</title>
        <meta name="description" content="My Technical Stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>techs here</h1>
    </Layout>
  );
}