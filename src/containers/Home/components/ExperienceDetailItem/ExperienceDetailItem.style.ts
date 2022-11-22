import styled from "styled-components";
import * as GeneralS from "../../style/general.style";

export const Wrapper = styled(GeneralS.ListItem)`
  margin-left: 15px;
  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: var(--font-size-subtitle);
`;
