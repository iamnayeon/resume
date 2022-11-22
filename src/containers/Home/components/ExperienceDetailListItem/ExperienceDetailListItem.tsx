import * as GeneralS from "../../style/General.style";
import * as S from "./ExperienceDetailListItem.style";
interface ExperienceListItemProp {
  title: string;
  duration?: string;
  description: string;
}
const ExperienceListItem = ({
  title,
  duration,
  description,
  children,
}: React.PropsWithChildren<ExperienceListItemProp>) => {
  return (
    <S.Wrapper>
      <S.Title style={{ lineHeight: 1.4 }}>{title}</S.Title>
      {duration && <GeneralS.DateText>{duration}</GeneralS.DateText>}
      <GeneralS.P style={{ marginTop: 6 }}>{description}</GeneralS.P>
      {children}
    </S.Wrapper>
  );
};

export default ExperienceListItem;
