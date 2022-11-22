import styled from "styled-components";
export const H2 = styled.h2`
  font-size: var(--font-size-head);
  color: var(--color-title);
`;

export const H3 = styled.h3`
  font-size: var(--font-size-title);
  color: var(--color-title);
`;

export const H4 = styled.h4`
  font-size: var(--font-size-subtitle);
  color: var(--color-title);
`;

export const P = styled.p`
  font-size: var(--font-size-text);
  color: var(--color-text);
  line-height: 1.6;
`;

export const lightP = styled(P)`
  color: var(--color-text-sub);
`;

export const PointText = styled.span`
  font-size: var(--font-size-text);
  font-weight: 700;
  color: var(--color-theme-point);
`;

export const BoldText = styled(P)`
  font-weight: 700;
`;

export const DateText = styled.p`
  font-size: var(--font-size-subtext);
  color: var(--color-text-sub);
  margin-top: 6px;
`;

export const Title = styled(H3)`
  margin-bottom: 10px;
  font-weight: 700;
`;

export const SubTitle = styled(H4)`
  font-weight: 700;
`;

export const ListItem = styled.li`
  list-style: square;
  ::marker {
    color: var(--color-theme-point);
  }
`;
