import * as GeneralS from "../General.style";
import Experience from "../components/Experience";
import CustomLink from "../components/CustomLink";

const ProjectSection = () => {
  return (
    <>
      <Experience
        title="3D 자기소개 웹사이트"
        description="3D 장난감 가게"
        usedStacks="Next.js, React-three-fiber, Three.js, Styled-Components, Blender"
        duration="2022.10"
      >
        <GeneralS.P>
          3D 관련 스택들을 공부하면서 처음 진행했던 작업입니다. 3D 모델링부터 개발, 배포까지 혼자
          진행했습니다.
        </GeneralS.P>

        <CustomLink href="https://nayeonkim.vercel.app" />
        <CustomLink type="github" href="https://github.com/iamnayeon/playground" />
      </Experience>
      <Experience
        title="비프로컴퍼니 - 골든패스 플랫폼"
        description="KFA(대한축구협회)가 주관하는 유소년 축구 선수 육성을 위한 골든패스 프로젝트만을 위한 분석 데이터 확인용 웹 애플리케이션"
        usedStacks="React, SCSS"
        duration="2021.07"
      >
        <GeneralS.P>
          공부하던 부트캠프에서 마지막 4주간 기업협업 프로젝트로 참여했던 프로젝트입니다. 처음으로
          혼자 만들어본 웹사이트이며 팀 내에서 프론트엔드 개발을 리드했습니다.
        </GeneralS.P>
        <CustomLink type="github" href="https://github.com/iamnayeon/goldenpass-platform" />
      </Experience>
    </>
  );
};

export default ProjectSection;
