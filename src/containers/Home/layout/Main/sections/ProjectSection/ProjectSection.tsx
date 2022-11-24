import * as GeneralS from "../../../../style/General.style";
import Experience from "../../../../components/Experience/Experience";
import CustomLink from "../../../../components/CustomLink/CustomLink";
import { DataBaseType } from "../../../../types/type";
interface IProjectItem extends DataBaseType {
  stacks: string[];
  subDescription: string;
}
const projectItemList: IProjectItem[] = [
  {
    title: "3D 자기소개 웹사이트",
    description: "3D 장난감 가게",
    subDescription:
      "3D 관련 스택들을 공부하면서 처음 진행했던 작업이며 3D 모델링부터 개발, 배포까지 혼자 진행했습니다.",
    stacks: ["Next.js", "React-three -fiber", "Three.js", "Styled-Components", "Blender"],
    duration: "2022.10",
    links: [
      {
        type: "github",
        href: "https://github.com/iamnayeon/playground",
      },
      { href: "https://nayeonkim.vercel.app" },
    ],
  },
  {
    title: "비프로컴퍼니 - 골든패스 플랫폼",
    description:
      "KFA(대한축구협회)가 주관하는 유소년 축구 선수 육성을 위한 골든패스 프로젝트만을 위한 분석 데이터 확인용 웹 애플리케이션",
    subDescription:
      "공부하던 부트캠프에서 마지막 4주간 기업협업 프로젝트로 참여했던 프로젝트입니다. 프론트/백 각각 2명씩 총 4명이서 협업했으며 팀 내에서 프론트엔드 개발을 리드했습니다.",
    stacks: ["React", "SCSS"],
    duration: "2021.07",
    links: [
      {
        type: "github",
        href: "https://github.com/iamnayeon/goldenpass-platform",
      },
    ],
  },
];
const ProjectSection = () => {
  return (
    <>
      {projectItemList.map(({ title, description, stacks, duration, subDescription, links }) => (
        <Experience
          key={title}
          title={title}
          description={description}
          usedStacks={stacks.join(", ")}
          duration={duration}
        >
          <GeneralS.P>{subDescription}</GeneralS.P>
          {links &&
            links.map(({ type, href }) => <CustomLink key={href} type={type} href={href} />)}
        </Experience>
      ))}
    </>
  );
};

export default ProjectSection;
