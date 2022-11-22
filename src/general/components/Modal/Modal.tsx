import ExitIcon from "../../../assets/x_icon.svg";
import Image from "next/image";
import { useContainer } from "unstated-next";
import ModalContext from "contexts/ModalContext";
import Portal from "general/Portal/Portal";
import * as S from "./Modal.style";
const Modal = ({
  children,
  uniqId = "modal-container",
}: React.PropsWithChildren<{ uniqId?: string }>) => {
  const { isOpened, setIsOpened } = useContainer(ModalContext);

  if (isOpened) {
    return (
      <Portal uniqId={uniqId}>
        <S.Backdrop onClick={() => setIsOpened(false)}>
          <S.CloseButton>
            <Image alt="" fill src={ExitIcon} />
          </S.CloseButton>
          <S.ModalWrapper>{children}</S.ModalWrapper>
        </S.Backdrop>
      </Portal>
    );
  } else return null;
};

export default Modal;
