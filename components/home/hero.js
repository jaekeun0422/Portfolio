import Animation from "./animation";
import Link from "next/link"

export default function Hero(){
  return(
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className= "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요,
          <br className="hidden lg:inline-block"/>
          <br></br>
          코딩하는 이재근
        </h1>
        <p className="mb-8 leading-relaxed">
        이국 위에 멀리 했던 이름자 가슴속에 없이 책상을 듯합니다. 이름과 다 너무나 있습니다. 이름자 걱정도 잠, 밤을 흙으로 봅니다. 별 오는 아무 겨울이 벌써 봅니다. 같이 하나에 이 불러 잠, 많은 밤이 버리었습니다. 이런 다 위에도 벌써 우는 까닭입니다. 봄이 위에 않은 별 별빛이 어머니, 보고, 청춘이 무엇인지 있습니다. 가슴속에 사랑과 우는 계십니다. 아름다운 아침이 불러 하나 가을 아스라히 거외다.
        </p>
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