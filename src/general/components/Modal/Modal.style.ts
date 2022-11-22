import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 48px;
`;

export const CloseButton = styled.button`
  position: fixed;
  right: 30px;
  top: 30px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  max-width: 360px;
  width: 100%;
`;
