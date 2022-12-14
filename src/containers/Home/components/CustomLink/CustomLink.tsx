import Image from "next/image";

import * as S from "./CustomLink.style";
import GithubImage from "../../assets/github_icon.svg";
import LinkIcon from "../../assets/link_icon.svg";
import { ILink } from "../../types/type";

interface CustomLinkProp extends ILink {
  //
}

const CustomLink = ({ type, href }: CustomLinkProp) => {
  return (
    <S.Wrapper href={href} target="_blank" rel="noopener noreferrer">
      <Image
        alt=""
        width={16}
        height={16}
        style={{ marginRight: 8 }}
        src={type === "github" ? GithubImage : LinkIcon}
      />

      <S.P>{href}</S.P>
    </S.Wrapper>
  );
};

export default CustomLink;
