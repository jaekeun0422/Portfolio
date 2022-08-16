import Animation from "./animation";
import Link from "next/link"

export default function Hero(){
  return(
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className= "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요,
        </h1>
        <br className="hidden lg:inline-block"/>
        <h2 className= "title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-700">
          코딩하는 이재근
        </h2>
        <p className="mb-8 leading-relaxed">
        Fortran을 시작하여 React/Next까지 ... [Front-end] HTML CSS JavaScript JQuery Vue React Android Object-C ... [Back-end] Java JavaServlet JSP SpringBoot Node PHP ... [기타] C Python R ... [개발 툴] Eclipse Intellij VisualStudioCode Github Notion ...
        </p>
        <p className="mb-8 leading-relaxed">나의 포트폴리오를 Next로 만들었다</p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">
            프로젝트...</a>
          </Link>
          <Link href="/techs">
            <a className="btn-project">
            기술스택...</a>
          </Link>  
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation/>
      </div>
    </>
  );
}