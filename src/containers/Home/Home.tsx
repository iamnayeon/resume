import { defaultHeadProps, Head } from "general/Head/Head";
import * as S from "./Home.style";
import * as GeneralS from "./General.style";
import { useRef } from "react";

import Nav from "./sections/Nav";
import SkillSection from "./sections/SkillSection";
import CareerSection from "./sections/CareerSection";
import ProjectSection from "./sections/ProjectSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import { Section, SectionDetail } from "./types/type";
import SectionContainer from "./components/SectionContainer";

import ListButton from "./components/ListButton";

const Home = () => {
  const sectionDetailMap: SectionDetail = {
    [Section.BasicInfo]: {
      name: "기본 정보",
      ref: useRef<HTMLElement>(null),
    },
    [Section.Skill]: {
      name: "기술",
      ref: useRef<HTMLElement>(null),
    },
    [Section.Career]: {
      name: "경력",
      ref: useRef<HTMLElement>(null),
    },
    [Section.Experience]: {
      name: "업무 경험",
      ref: useRef<HTMLElement>(null),
    },
    [Section.Project]: {
      name: "프로젝트",
      ref: useRef<HTMLElement>(null),
    },
    [Section.Education]: {
      name: "학력",
      ref: useRef<HTMLElement>(null),
    },
  };

  return (
    <>
      <Head {...defaultHeadProps} />

      <S.Wrapper>
        <ListButton sectionDetailMap={sectionDetailMap} />
        <Nav />

        <S.Main>
          <section ref={sectionDetailMap[Section.BasicInfo].ref}>
            <S.MainHead>
              <S.BasicSection>
                <S.Name>김나연</S.Name>
                <S.JobTitle>Front-end Developer</S.JobTitle>
              </S.BasicSection>
              <S.IntroSection>
                <GeneralS.H2>
                  안녕하세요:) 아름다운 변화를 만들어나가는 3년차 프론트엔드 개발자 김나연입니다.
                </GeneralS.H2>

                <S.Intro>
                  <GeneralS.P>
                    빠르게 성장하는 시리즈A 스타트업에서 2년간 근무하며 여러 비지니스 성장에
                    기여하고 함께 성장한 경험이 있습니다.
                  </GeneralS.P>
                  <br />
                  <GeneralS.P>
                    유저에게 더 나은 사용자 경험을 가져다주기 위한 시각적인 요소들을 구현하는 과정을
                    좋아합니다. 잘 구현된 디자인 요소들이 단순히 시각적 아름다움을 넘어 눈에 보이진
                    않지만 아름다운 사용자 경험과 비지니스적 가치를 만들어낼 수 있다고 생각합니다.
                    이를 위해 계속해서 좋은 디자인들을 웹상에 구현해 내기 위한 공부를 해나가고
                    있습니다.
                  </GeneralS.P>
                  <br />
                  <GeneralS.P>
                    불필요한 프로세스를 개선하고 반복적인 업무를 자동화하는 일을 좋아합니다. 오늘
                    겪는 불편함이 내일은 더 나아갈 수 있는 가능성이라고 생각하며 항상 누군가가 겪고
                    있을 불편함에 귀 기울입니다.
                  </GeneralS.P>
                </S.Intro>
              </S.IntroSection>
            </S.MainHead>
          </section>
          <S.MainBody>
            <SectionContainer
              title="이런 기술을 사용합니다"
              ref={sectionDetailMap[Section.Skill].ref}
            >
              <SkillSection />
            </SectionContainer>

            <SectionContainer
              title="이런 회사에서 일했습니다"
              ref={sectionDetailMap[Section.Career].ref}
            >
              <CareerSection />
            </SectionContainer>

            <SectionContainer
              title="이런 업무에 대한 경험이 있습니다"
              ref={sectionDetailMap[Section.Experience].ref}
            >
              <ExperienceSection />
            </SectionContainer>

            <SectionContainer
              title="이런 프로젝트를 진행했습니다"
              ref={sectionDetailMap[Section.Project].ref}
            >
              <ProjectSection />
            </SectionContainer>

            <SectionContainer
              title="이런 교육을 받았습니다"
              ref={sectionDetailMap[Section.Education].ref}
            >
              <EducationSection />
            </SectionContainer>
          </S.MainBody>
        </S.Main>
        <S.Footer>
          <GeneralS.P>
            *본 이력서는{" "}
            <S.Link href="https://nayeoncv.vercel.app" target="_blank" rel="noopener noreferrer">
              이곳
            </S.Link>
            에 웹 페이지로도 구현이 되어있습니다. 코드는{" "}
            <S.Link
              href="https://github.com/iamnayeon/resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              여기서
            </S.Link>{" "}
            확인하실 수 있습니다.
          </GeneralS.P>
        </S.Footer>
      </S.Wrapper>
    </>
  );
};

export default Home;
