import * as GeneralS from "../../style/General.style";
import * as S from "./Footer.style";
const Footer = () => {
  return (
    <S.Wrapper>
      <GeneralS.P>
        *본 이력서는{" "}
        <S.Link href="https://nayeoncv.vercel.app" target="_blank" rel="noopener noreferrer">
          이곳
        </S.Link>
        에 웹 페이지로도 구현이 되어있습니다. 코드는{" "}
        <S.Link
          href="https://github.com/iamnayeon/resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          여기서
        </S.Link>{" "}
        확인하실 수 있습니다.
      </GeneralS.P>
    </S.Wrapper>
  );
};

export default Footer;
