import SectionContainer from "../components/SectionContainer";
import * as S from "./SkillSection.style";
import * as GeneralS from "../General.style";
const SkillSection = () => {
  return (
    <SectionContainer title="이런 기술을 사용합니다">
      <S.ListContainer>
        <GeneralS.ListItem>
          <GeneralS.PointText>Javascript ES6+</GeneralS.PointText> 로 개발을 해오고 있으며
          동적언어라는 단점을 보완하기 위해 <GeneralS.PointText>TypeScript</GeneralS.PointText>를
          사용합니다.
        </GeneralS.ListItem>
        <GeneralS.ListItem>
          <GeneralS.PointText>HTML5</GeneralS.PointText>를 이용한 시맨틱 마크업과{" "}
          <GeneralS.PointText>CSS3/SCSS</GeneralS.PointText>를 이용한 스타일 개발에 능숙합니다.
        </GeneralS.ListItem>
        <GeneralS.ListItem>
          JS기반 프레임워크 중 하나인 <GeneralS.PointText>React</GeneralS.PointText>로 생성한 웹
          프로덕트 총 4개를 2년간 유지보수/개발/배포/운영에 참여한 경험이 있습니다.
        </GeneralS.ListItem>
        <GeneralS.ListItem>
          불편을 겪고 있던 수동 배포 프로세스를 협업에 더 편한 환경으로 개선하기 위해 Github
          Action으로 <GeneralS.PointText>CI/CD</GeneralS.PointText> 구성을 해본 경험이 있습니다.
        </GeneralS.ListItem>
        <GeneralS.ListItem>
          랜딩페이지를 <GeneralS.PointText>반응형 디자인</GeneralS.PointText>을 고려하여{" "}
          <GeneralS.PointText>웹뷰</GeneralS.PointText>로 구현해본 경험이 있습니다.
        </GeneralS.ListItem>
        <GeneralS.ListItem>
          <GeneralS.PointText>Cloud Firestore</GeneralS.PointText>를 이용하여 DB를 구성, React와
          연동해본 경험이 있습니다.
        </GeneralS.ListItem>
        <GeneralS.ListItem>
          JS기반 3D 라이브러리 <GeneralS.PointText>Three.js</GeneralS.PointText>를 사용하는 회사의
          주요 기능을 유지보수를 해본 경험이 있습니다.
        </GeneralS.ListItem>
        <GeneralS.ListItem>
          <GeneralS.PointText>AWS S3, Route5, CloudFront</GeneralS.PointText>를 활용하여 웹사이트를
          배포, 서비스되고 있는 웹서비스의 도메인을 변경 해본 경험이 있습니다.
        </GeneralS.ListItem>
      </S.ListContainer>
    </SectionContainer>
  );
};

export default SkillSection;
