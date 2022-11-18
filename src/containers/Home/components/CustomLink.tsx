import Image from "next/image";
import * as GeneralS from "../General.style";
import * as S from "./CustomLink.style";
import GithubImage from "../assets/github_icon.svg";
import LinkIcon from "../assets/link_icon.svg";

interface CustomLinkProp {
  type?: "github";
  href: string;
}

const CustomLink = ({ type, href }: CustomLinkProp) => {
  return (
    <S.Wrapper
      onClick={() => {
        window.open(href);
      }}
    >
      <Image
        alt=""
        width={16}
        height={16}
        style={{ marginRight: 8 }}
        src={type === "github" ? GithubImage : LinkIcon}
      />

      <GeneralS.P style={{ whiteSpace: "nowrap", fontSize: 13 }}>{href}</GeneralS.P>
    </S.Wrapper>
  );
};

export default CustomLink;
