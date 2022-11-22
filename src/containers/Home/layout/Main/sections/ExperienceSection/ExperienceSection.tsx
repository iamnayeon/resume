import * as S from "./ExperienceSection.style";
import Experience from "../../../../components/Experience/Experience";
import ExperienceDetailItem from "../../../../components/ExperienceDetailItem/ExperienceDetailItem";
import CustomLink from "../../../../components/CustomLink/CustomLink";
import { DataBaseType } from "containers/Home/types/type";

interface IExperienceItemList extends DataBaseType {
  stacks: string[];
  details: DataBaseType[];
}

const experienceItemList: IExperienceItemList[] = [
  {
    title: "[프로덕트] 비프로 데이터 관리용 웹 애플리케이션",
    description:
      "축구 영상, 시각화된 경기 분석 데이터 등 유저가 확인할 수 있는 모든 데이터가 모여있는 웹 애플리케이션",
    stacks: ["React", "TypeScript", "Three.js"],
    details: [
      {
        title: "애플 로그인 기능 추가",
        duration: "2022.06 ~ 2022.07",
        description:
          "비프로 iOS 앱에서만 애플 로그인 기능이 존재하여 iOS 앱에서 애플 계정으로 가입한 유저는 타 플랫폼을 이용할 수 없었던 문제를 해결하기 위해 애플 로그인 기능 추가",
      },
      {
        title:
          "선수 간 역량을 비교, 분석해볼 수 있도록 선수들의 분석 데이터를 표와 그래프로 시각화하여 제공하는 Player Benchmark 기능 개발",
        duration: "2020.12 ~ 2021.04",
        description:
          "분석된 축구 데이터를 팀 코치들이 선수 역량 강화를 위하여 활용할 수 있도록 돕는 하나의 솔루션으로 선수들의 데이터 수치를 비교해서 확인해볼 수 있는 기능 개발 , SVG 활용해서 그래프를 구현, 해당 기능으로 독일 2부 리그에 있는 팀 유치에 기여",
        links: [
          {
            href: "https://bepro11.medium.com/the-bepro-player-benchmark-tool-436d65e46de0",
          },
        ],
      },
      {
        title: "제품에서 발생한 오류 모니터링 시스템 도입",
        description:
          "유저가 제품 사용 도중 에러가 발생하여 버그를 제보했을 때 프로덕트 팀과 CS(Customer Success)팀 간에 상황 확인을 위한 비효율적인 커뮤니케이션이 발생하는 문제를 확인, 궁극적으로는 더 빠른 이슈 대응을 위해 React Boundary 이용하여 오류 발생 시 발생한 오류에 대한 정보, 발생 유저에 대한 데이터를 Slack으로 띄워주도록 하는 기능 추가하여 문제 개선",
      },
      {
        title: "제품 업데이트 사항에 대한 모니터링 시스템 도입",
        description:
          "제품의 업데이트된 사항에 대해 개발자 - PM(Product Manager) - 디자이너 간에 획일적인 정보가 공유되지 않아 협업 시 불필요한 커뮤니케이션 비용이 드는 문제가 발생하는 것을 확인, 배포 시 슬랙으로 업데이트된 기능에 대한 정보를 띄워주도록 하는 기능 추가하여 개선",
      },
      {
        title: "랜딩 페이지 Webflow 플랫폼으로 이전, 도메인 네임 변경",
        description:
          "마케팅 팀에서 랜딩 페이지의 사소한 내용이라도 수정하려면 프로덕트 팀과 커뮤니케이션하는 비효율적인 프로세스 확인, 마케팅 팀에서 랜딩 페이지를 주도적으로 관리할 수 있도록 돕기 위해 랜딩 페이지를 Webflow 플랫폼으로 이전, 이전 과정에서 마케팅 전략으로 기존 플랫폼에서 서브 도메인을 사용하도록 도메인 변경, 도메인 변경 과정에서 기존 유저들의 사용자 경험을 해치지 않도록 하기 위해 동일한 테스트 환경을 구축하여 QA 진행해볼 수 있도록 QA 과정을 리드",
      },
    ],
  },
  {
    title: "[프로덕트] 비프로 축구 경기 분석용 웹 애플리케이션",
    description: "축구 경기를 분석하기 위한 회사 내부 분석팀원들을 위한 웹 애플리케이션",
    stacks: ["React", "TypeScript"],
    details: [
      {
        title: "분석 오류를 검토하는 과정을 자동화하는 로직 개발",
        duration: "2022.04 ~ 2022.08",
        description:
          "분석 정확도를 높이기 위해 한 경기 분석에 메인 분석(1) + 검토(3) 총 4명의 분석 인력이 투입되는 문제를 확인, 분석 오류 검토 과정을 자동화할 수 있는 로직을 추가하여 경기당 총분석 단가 최대 40% 감축 예상",
      },
    ],
  },
  {
    title: "[프로덕트] 비프로 영상 편집용 웹 애플리케이션",
    description: "촬영된 영상을 유저가 직접 편집할 수 있는 영상 편집 툴",
    stacks: ["React", "TypeScript", "Electron.js", "Three.js"],
    details: [
      {
        title: "영상 내에서 실시간으로 선수의 분석 데이터를 확인할 수 있는 기능 개발",
        duration: "2022.04 ~ 2022.05",
        description:
          "축구 영상과 분석된 데이터를 동시에 보고 싶은 유저의 니즈를 해결하기 위해 영상 내에서 선택한 선수의 상단에 분석된 수치를 보여주는 기능, 영상의 좌측 하단에 선택한 선수들의 데이터를 표로 보여주는 기능 추가",
        links: [{ href: "https://ko.bepro11.com/news-updates/editor-dynamic-graphic" }],
      },
      {
        title: "데이터 정기 백업용 Google Cloud Function 추가",
        description:
          "Cloud Firestore로 관리하는 데이터를 따로 백업하고 있지 않아 한번 소실된 데이터는 복구가 어려운 문제 발견, 데이터의 안정성을 높이기 위해 백업용 Firebase 프로젝트를 생성하고 해당 프로젝트에 매달 정기적으로 데이터를 백업하도록 하는 Google Cloud Function을 추가",
      },
    ],
  },
  {
    title: "[프로덕트] KFA의 골든패스 프로젝트 데이터 관리를 위한 별도 웹 애플리케이션",
    description:
      "KFA(대한축구협회)가 주관하는 유소년 축구 선수 육성을 위한 골든패스 프로젝트만을 위해 사용되는 분석 데이터 확인용 웹 애플리케이션",
    stacks: ["React"],
    details: [
      {
        title: "프론트엔드 개발부터 배포까지 혼자 담당",
        duration: "2020.09 ~ 2020.10",
        description:
          "KFA(대한축구협회)가 유소년 축구 선수 육성을 위한 골든패스 프로젝트를 실시, 해당 프로젝트에서 측정한 선수들의 데이터를 관리하기 위한 웹 애플리케이션 개발을 의뢰하여 2달이라는 짧은 타임라인 내에 전체 프로젝트의 프론트엔드 개발부터 서비스 배포까지 성공적으로 마침, KFA의 골든패스 플랫폼으로 파트너십 체결에 성공",
        links: [
          {
            href: "https://bepro11.medium.com/the-kfa-develops-the-next-generation-of-football-stars-with-bepro-7baf59b8b213",
          },
        ],
      },
    ],
  },
];
const ExperienceSection = () => {
  return (
    <>
      {experienceItemList.map((experienceItem) => (
        <Experience
          key={experienceItem.title}
          title={experienceItem.title}
          description={experienceItem.description}
          usedStacks={experienceItem.stacks.join(", ")}
        >
          <S.UL>
            {experienceItem.details.map((detail) => (
              <ExperienceDetailItem
                key={detail.title}
                title={detail.title}
                duration={detail.duration}
                description={detail.description}
              >
                {detail.links &&
                  detail.links.map(({ type, href }) => (
                    <CustomLink key={href} href={href} type={type} />
                  ))}
              </ExperienceDetailItem>
            ))}
          </S.UL>
        </Experience>
      ))}
    </>
  );
};

export default ExperienceSection;
