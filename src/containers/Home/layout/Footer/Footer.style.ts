import styled from "styled-components";

export const Wrapper = styled.footer`
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

export const Link = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;
