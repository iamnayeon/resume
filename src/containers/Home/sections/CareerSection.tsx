import SectionContainer from "../components/SectionContainer";
import * as GeneralS from "../General.style";

const CareerSection = () => {
  return (
    <SectionContainer title="이런 회사에서 일했습니다">
      <GeneralS.Title>비프로컴퍼니 (Bepro UK-LTD)</GeneralS.Title>
      <GeneralS.P>
        누적 경기 분석 횟수 3만 건, 전 세계 40여 개 국가, 2,000여 개의 팀이 이용하는 축구 영상,
        데이터 분석 서비스를 제공하는 시리즈A 스타트업
      </GeneralS.P>
      <div style={{ marginTop: 12 }}>
        <GeneralS.SubTitle>Frontend Developer</GeneralS.SubTitle>
        <GeneralS.DateText>2020.09 ~ 2022.08 (2년)</GeneralS.DateText>
      </div>
    </SectionContainer>
  );
};

export default CareerSection;
