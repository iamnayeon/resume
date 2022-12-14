import * as GeneralS from "../../style/General.style";
import * as S from "./Experience.style";
import Table from "../Table/Table";
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
          <Table
            rows={[
              {
                headCell: "간단 소개",
                dataCell: description,
              },
              {
                headCell: "사용 기술",
                dataCell: usedStacks,
              },
            ]}
          />
        )}
        {children}
      </S.ContentsContainer>
    </S.Wrapper>
  );
};

export default Experience;
