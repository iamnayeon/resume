import * as S from "./Home.style";
import * as GeneralS from "./General.style";
import Image from "next/image";
import ProfileImage from "./assets/apple-icon-57x57.png";
import EmailImage from "./assets/email_icon.svg";
import GithubImage from "./assets/github_icon.svg";
import LinkedinImage from "./assets/linkedin_icon.svg";

import SkillSection from "./sections/SkillSection";
import CareerSection from "./sections/CareerSection";
import ProjectSection from "./sections/ProjectSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";

const Home = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HomeButtonWrapper>
          <Image
            src={ProfileImage}
            width={25}
            style={{ borderRadius: "50%", marginRight: 5 }}
            alt=""
          />
          <p>김나연</p>
        </S.HomeButtonWrapper>

        <div>
          <S.LinkIcon href="mailto:nana.nayeonk@gmail.com">
            <Image src={EmailImage} alt="" fill />
          </S.LinkIcon>
          <S.LinkIcon href="https://github.com/iamnayeon">
            <Image src={GithubImage} alt="" fill />
          </S.LinkIcon>
          <S.LinkIcon href="https://www.linkedin.com/in/nayeon-kim-a363311b4/">
            <Image src={LinkedinImage} alt="" fill />
          </S.LinkIcon>
        </div>
      </S.Header>

      <S.Main>
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
                빠르게 성장하는 시리즈A 스타트업에서 2년간 근무하며 여러 비지니스 성장에 기여하고
                함께 성장한 경험이 있습니다.
              </GeneralS.P>
              <GeneralS.P>
                불필요한 프로세스를 개선하고 반복적인 업무를 자동화하는 일을 좋아합니다.
              </GeneralS.P>
              <GeneralS.P>
                유저에게 더 나은 사용자 경험을 주기 위한 시각적인 요소들을 구현하는 과정을
                좋아합니다. 이를 위해 계속해서 새로운 기술을 탐구하고 있습니다.
              </GeneralS.P>
            </S.Intro>
          </S.IntroSection>
        </S.MainHead>
        <S.MainBody>
          <SkillSection />
          <CareerSection />
          <ExperienceSection />
          <ProjectSection />
          <EducationSection />
        </S.MainBody>
      </S.Main>
      <S.Footer>
        <GeneralS.P>
          *본 이력서는 이곳에 웹 페이지로도 구현이 되어있습니다. 코드는 이곳에서 확인하실 수
          있습니다.
        </GeneralS.P>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Home;
