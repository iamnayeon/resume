import styled from "styled-components";
export const Wrapper = styled.nav`
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
