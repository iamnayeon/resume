import styled from "styled-components";
import * as GeneralS from "../General.style";

export const Wrapper = styled.li`
  padding-left: 15px;
  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Title = styled(GeneralS.ListItem)`
  font-weight: 700;
  font-size: var(--font-size-subtitle);
`;
