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

export const Table = styled.table`
  margin-bottom: 10px;
`;
export const TR = styled.tr`
  text-align: left;
`;

export const TH = styled.th`
  padding-right: 1rem;
`;

export const TD = styled.td``;
