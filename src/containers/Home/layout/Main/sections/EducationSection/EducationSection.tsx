import * as GeneralS from "../../../../style/general.style";
import Experience from "../../../../components/Experience/Experience";
import { DataBaseType } from "containers/Home/types/type";

interface IEducationItem extends DataBaseType {
  duration: string;
}
const educationItemList: IEducationItem[] = [
  {
    title: "코드스테이츠",
    duration: "2020.03 ~ 2020.08",
    description:
      "Advance software engineering, Immersive program (소프트웨어 엔지니어 육성 부트캠프)",
  },
  {
    title: "東海大学 (Tokai University)",
    duration: "2017.09 ~ 2018.02",
    description: "교환학생",
  },
  {
    title: "한양대학교 ERICA",
    duration: "2014.03 ~ 2019.09",
    description: "일본언어문화학과 학사",
  },
];
const EducationSection = () => {
  return (
    <>
      {educationItemList.map(({ title, duration, description }) => (
        <Experience title={title} duration={duration} key={title}>
          <GeneralS.P>{description}</GeneralS.P>
        </Experience>
      ))}
    </>
  );
};

export default EducationSection;
