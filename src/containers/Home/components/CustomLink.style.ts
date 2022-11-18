import styled from "styled-components";

export const Wrapper = styled.button`
  text-decoration: underline;
  display: flex;
  width: min-content;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 5px;

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    border-radius: 9px;
    content: "";
    height: 100%;
    width: 100%;
    opacity: 0;
    transform: scaleX(0.5);
    transition: all 0.2s cubic-bezier(0.6, 0.04, 0.45, 1.01);
    z-index: 0;
    backdrop-filter: saturate(1.2);
    background: rgba(204, 209, 223, 0.2);
  }

  &:hover {
    &:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;
