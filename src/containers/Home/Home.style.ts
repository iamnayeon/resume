import styled from "styled-components";
import * as GeneralS from "./General.style";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
    border-left: 1px solid var(--color-line-gray);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #9fa0a8;
    border-radius: 8px;
  }

  & ::selection {
    background-color: #e5e8eb;
  }

  ul {
    list-style: none;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  height: 48px;
  padding: 6px 14px;
  background-color: white;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-line-gray);
`;

export const HomeButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LinkIcon = styled.a`
  cursor: pointer;
  transition: all 0.1s ease;
  width: 25px;
  height: 25px;
  position: relative;
  margin-left: 20px;
  opacity: 0.8;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Main = styled.main`
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

export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  right: 0;
  left: 0;
  border-top: 1px solid var(--color-line-gray);
  display: flex;
  align-items: flex-end;
  font-size: 12px;
  justify-content: flex-end;

  padding: 32px 20px 100px;
`;
