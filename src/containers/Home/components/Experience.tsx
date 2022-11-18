import * as GeneralS from "../General.style";
import * as S from "./Experience.style";
interface ExperienceProp {
  title: string;
  description?: string;
  usedStacks?: string;
  duration?: string;
}
const Experience = ({
  title,
  description,
  usedStacks,
  duration,
  children,
}: React.PropsWithChildren<ExperienceProp>) => {
  return (
    <S.Wrapper>
      <GeneralS.Title>{title}</GeneralS.Title>
      {duration && <GeneralS.DateText>{duration}</GeneralS.DateText>}
      <S.ContentsContainer>
        {usedStacks && description && (
          <S.Table>
            <S.TR>
              <S.TH>
                <GeneralS.lightP>한줄 소개</GeneralS.lightP>
              </S.TH>
              <S.TD>
                <GeneralS.P>{description}</GeneralS.P>
              </S.TD>
            </S.TR>
            <S.TR>
              <S.TH>
                <GeneralS.lightP>사용 기술</GeneralS.lightP>
              </S.TH>
              <S.TD>
                <GeneralS.P>{usedStacks}</GeneralS.P>
              </S.TD>
            </S.TR>
          </S.Table>
        )}
        {children}
      </S.ContentsContainer>
    </S.Wrapper>
  );
};

export default Experience;
