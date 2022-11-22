import Image from "next/image";
import hamburgerIcon from "../../../../assets/hamburger_list_icon.svg";
import Modal from "../../../../general/components/Modal/Modal";
import ModalContext from "contexts/ModalContext";
import { useContainer } from "unstated-next";
import * as S from "./SectionNavButton.style";
import { Section } from "../../types/type";
import MainSectionContext from "containers/Home/contexts/MainSectionContext";

const SectionNavButton = () => {
  const { setIsOpened } = useContainer(ModalContext);
  const { sectionDetailMap } = useContainer(MainSectionContext);
  return (
    <>
      <S.Button onClick={() => setIsOpened(true)}>
        <Image alt="" width={25} height={25} src={hamburgerIcon} />
      </S.Button>

      <Modal>
        <S.ModalInner>
          <ul>
            {Object.values(Section).map((sectionK) => (
              <S.ListItem
                key={sectionK}
                onClick={() => {
                  sectionDetailMap[sectionK].ref.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                {sectionDetailMap[sectionK].name}
              </S.ListItem>
            ))}
          </ul>
        </S.ModalInner>
      </Modal>
    </>
  );
};

export default SectionNavButton;
