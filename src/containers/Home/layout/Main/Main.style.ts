import styled from "styled-components";
import * as GeneralS from "../../style/General.style";

export const Wrapper = styled.main`
  max-width: 1024px;
  margin: auto;
`;

export const MainHead = styled.div`
  padding: 90px var(--padding-inline) 48px;
`;

export const MainBody = styled.div`
  padding: 0 var(--padding-inline);
  color: var(--color-text);
  font-size: var(--font-size-text);
`;

export const BasicSection = styled.section``;

export const IntroSection = styled.section`
  line-height: 1.6;
`;

export const Name = styled.h1`
  font-size: var(--font-size-name);
  font-weight: 700;
  margin-bottom: 4px;
`;

export const JobTitle = styled(GeneralS.H2)`
  font-weight: 400;
  margin-bottom: 24px;
  padding-bottom: 24px;
  position: relative;
`;

export const Intro = styled.div`
  margin-top: 12px;
  color: var(--color-text);
`;
