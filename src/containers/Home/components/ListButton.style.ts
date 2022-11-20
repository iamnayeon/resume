import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 48px;
  height: 48px;
  background: var(--color-theme-point);
  border-radius: 50%;
  cursor: pointer;
`;

export const ModalInner = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 10px 8px;
`;

export const ListItem = styled.li`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-theme-point);
    color: white;
    border-radius: 10px;
  }
`;
