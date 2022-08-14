import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects ({projects}) {

  console.log(projects); // CSR (Console에서 나옴)

  return(
    <Layout>
     <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
      <Head>
        <title>나의 포트폴리오</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl font-bold sm:text-6xl"> 
        <span className="pl-4 text-blue-500">총 프로젝트 ({projects.results.length})</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
        {projects.results.map( (aProject) => (
          <ProjectItem key={aProject.id} data={aProject} />
        ))}
      </div>
     </div> 
    </Layout>
  );
}

export async function getStaticProps() {

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22', // latest 2022-06-28:
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      sorts: [
        {
          "property": "name",
          "direction": "ascending"
        }
      ],
      page_size: 100
    })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
   /*
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  */ 
    const projects = await res.json()
    /*
    const projectIds = projects.results.map((aProject) =>(
      aProject.id
    ))
    console.log(`projectIds : ${projectIds}`);
    */
    /*
    const projectDesc = projects.results.map((aProject) =>(
      aProject.properties.description.id
    ))
    console.log(`projectDesc : ${projectDesc}`);
    */
    
    const projectNames = projects.results.map((aProject) =>(
        aProject.properties.name.title[0].plain_text
    ))
    console.log(`projectNames : ${projectNames}`); // SSR (Terminal에서 나옴)
      
    return {
      props: {projects}, // will be passed to the page component as props
      // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
      // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
    }
}