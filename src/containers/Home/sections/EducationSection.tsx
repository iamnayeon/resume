import * as GeneralS from "../General.style";
import Experience from "../components/Experience";

const EducationSection = () => {
  return (
    <>
      <Experience title="코드스테이츠" duration="2020.03 ~ 2020.08">
        <GeneralS.P>
          Advance software engineering, Immersive program (소프트웨어 엔지니어 육성 부트캠프)
        </GeneralS.P>
      </Experience>
      <Experience title="東海大学 (Tokai University)" duration="2017.09 ~ 2018.02">
        <GeneralS.P>교환학생</GeneralS.P>
      </Experience>
      <Experience title="한양대학교 ERICA" duration="2014.03 ~ 2019.09">
        <GeneralS.P>일본언어문화학과 학사</GeneralS.P>
      </Experience>
    </>
  );
};

export default EducationSection;
