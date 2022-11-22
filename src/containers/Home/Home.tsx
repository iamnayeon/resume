import { defaultHeadProps, Head } from "general/Head/Head";
import * as S from "./Home.style";

import Header from "./layout/Header/Header";

import SectionNavButton from "./components/SectionNavButton/SectionNavButton";
import Footer from "./layout/Footer/Footer";
import Main from "./layout/Main/Main";
import MainSectionContext from "./contexts/MainSectionContext";

const Home = () => {
  return (
    <>
      <Head {...defaultHeadProps} />

      <S.Wrapper>
        <Header />
        <MainSectionContext.Provider>
          <Main />
          <SectionNavButton />
        </MainSectionContext.Provider>

        <Footer />
      </S.Wrapper>
    </>
  );
};

export default Home;
