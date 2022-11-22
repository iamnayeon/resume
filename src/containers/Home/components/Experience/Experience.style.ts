import styled from "styled-components";

export const Wrapper = styled.article`
  :not(:last-child) {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-line-gray);
  }
`;

export const ContentsContainer = styled.div`
  margin-top: 6px;
`;
