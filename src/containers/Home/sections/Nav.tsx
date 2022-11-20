import * as S from "./Nav.style";
import { useEffect, useRef } from "react";
import Image from "next/image";
import ProfileImage from "../assets/apple-icon-57x57.png";
import EmailImage from "../assets/email_icon.svg";
import GithubImage from "../assets/github_icon.svg";
import LinkedinImage from "../assets/linkedin_icon.svg";

const Nav = () => {
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const _onScroll = () => {
      if (!navRef.current) return;
      const isNotScrolled = !document.scrollingElement?.scrollTop;

      if (isNotScrolled) {
        navRef.current.style.borderBottom = "none";
      } else {
        navRef.current.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
      }
    };
    window.addEventListener("scroll", _onScroll);

    return () => {
      window.removeEventListener("scroll", _onScroll);
    };
  }, []);
  return (
    <S.Wrapper ref={navRef}>
      <S.HomeButtonWrapper
        onClick={(e) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Image
          src={ProfileImage}
          width={25}
          style={{ borderRadius: "50%", marginRight: 5 }}
          alt=""
        />
        <p>김나연</p>
      </S.HomeButtonWrapper>

      <div>
        <S.LinkIcon href="mailto:nana.nayeonk@gmail.com">
          <Image src={EmailImage} alt="" fill />
        </S.LinkIcon>
        <S.LinkIcon href="https://github.com/iamnayeon" target="_blank" rel="noopener noreferrer">
          <Image src={GithubImage} alt="" fill />
        </S.LinkIcon>
        <S.LinkIcon
          href="https://www.linkedin.com/in/nayeon-kim-a363311b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={LinkedinImage} alt="" fill />
        </S.LinkIcon>
      </div>
    </S.Wrapper>
  );
};
export default Nav;
