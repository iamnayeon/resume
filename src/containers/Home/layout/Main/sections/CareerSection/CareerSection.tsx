import * as GeneralS from "../../../../style/General.style";
import { Fragment } from "react";
import { DataBaseType } from "../../../../types/type";

interface ICareerItem extends DataBaseType {
  duration: string;
  position: string;
}

const careerItems: ICareerItem[] = [
  {
    title: "비프로컴퍼니 (Bepro UK-LTD)",
    description:
      "누적 경기 분석 횟수 3만 건, 전 세계 40여 개 국가, 2,000여 개의 팀이 이용하는 축구 영상, 데이터 분석 서비스를 제공하는 시리즈A 스타트업",
    position: "Frontend Developer",
    duration: "2020.09 ~ 2022.08 (2년)",
  },
];

const CareerSection = () => {
  return (
    <>
      {careerItems.map(({ title, description, position, duration }) => (
        <Fragment key={title}>
          <GeneralS.Title>{title}</GeneralS.Title>
          <GeneralS.P>{description}</GeneralS.P>
          <div style={{ marginTop: 12 }}>
            <GeneralS.SubTitle>{position}</GeneralS.SubTitle>
            <GeneralS.DateText>{duration}</GeneralS.DateText>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default CareerSection;
