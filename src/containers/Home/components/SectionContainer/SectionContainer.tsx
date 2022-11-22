import * as S from "./SectionContainer.style";
import { forwardRef } from "react";
interface SectionProp {
  title: string;
}
const SectionContainer = forwardRef<HTMLElement, React.PropsWithChildren<SectionProp>>(
  ({ title, children }, ref) => {
    return (
      <S.Section ref={ref}>
        <S.SectionName>{title}</S.SectionName>
        {children}
      </S.Section>
    );
  }
);

export default SectionContainer;
