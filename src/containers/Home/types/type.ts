import { RefObject } from "react";

export enum Section {
  BasicInfo = "basicInfo",
  Skill = "skill",
  Career = "career",
  Experience = "experience",
  Project = "project",
  Education = "education",
}

export type SectionDetail = { [key in Section]: { ref: RefObject<HTMLElement>; name: string } };
