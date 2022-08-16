import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";

export default function Techs () {

  const myStack = '/languages.jpg';

  return(
    <Layout>
      <Head>
        <title>나의 포트폴리오</title>
        <meta name="description" content="My Technical Stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Image
          //className="rounded-t-xl"
          src={myStack}
          alt="My Technical Stack"
          width="270%"
          height="150%"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
    </Layout>
  );
}