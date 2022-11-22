import { createContainer } from "unstated-next";
import { SectionDetail, Section } from "../types/type";
import { useRef } from "react";

export default createContainer(() => {
  const sectionDetailMap: SectionDetail = {
    [Section.BasicInfo]: {
      name: "기본 정보",
      ref: useRef<HTMLElement>(null),
    },
    [Section.Skill]: {
      name: "기술",
      ref: useRef<HTMLElement>(null),
    },
    [Section.Career]: {
      name: "경력",
      ref: useRef<HTMLElement>(null),
    },
    [Section.Experience]: {
      name: "업무 경험",
      ref: useRef<HTMLElement>(null),
    },
    [Section.Project]: {
      name: "프로젝트",
      ref: useRef<HTMLElement>(null),
    },
    [Section.Education]: {
      name: "학력",
      ref: useRef<HTMLElement>(null),
    },
  };
  return {
    sectionDetailMap,
  };
});
