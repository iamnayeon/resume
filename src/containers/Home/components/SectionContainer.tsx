import * as S from "./SectionContainer.style";
interface SectionProp {
  title: string;
}
const SectionContainer = ({ title, children }: React.PropsWithChildren<SectionProp>) => {
  return (
    <S.Section>
      <S.SectionName>{title}</S.SectionName>
      {children}
    </S.Section>
  );
};

export default SectionContainer;
