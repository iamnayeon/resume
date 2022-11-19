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
      <GeneralS.Title style={{ lineHeight: 1.3 }}>{title}</GeneralS.Title>
      {duration && <GeneralS.DateText>{duration}</GeneralS.DateText>}
      <S.ContentsContainer>
        {usedStacks && description && (
          <S.Table>
            <tbody>
              <S.TR>
                <S.TH>
                  <GeneralS.lightP style={{ whiteSpace: "nowrap" }}>간단 소개</GeneralS.lightP>
                </S.TH>
                <S.TD>
                  <GeneralS.P>{description}</GeneralS.P>
                </S.TD>
              </S.TR>
              <S.TR>
                <S.TH>
                  <GeneralS.lightP style={{ whiteSpace: "nowrap" }}>사용 기술</GeneralS.lightP>
                </S.TH>
                <S.TD>
                  <GeneralS.P>{usedStacks}</GeneralS.P>
                </S.TD>
              </S.TR>
            </tbody>
          </S.Table>
        )}
        {children}
      </S.ContentsContainer>
    </S.Wrapper>
  );
};

export default Experience;
