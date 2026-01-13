export type SkillCategory =
  | "Language"
  | "FrontEnd"
  | "BackEnd"
  | "Database"
  | "DevOps"
  | "ETC";

export type SkillItem = {
  key: string; // icon file name (public/icons/{key}.svg)
  title: string; // label
  level?: "Main" | "Used" | "Tried";
  desc?: string; // short description (optional)
  desc2?: string; // short description (optional)
};

export const SKILL_CATEGORIES: Array<{ id: SkillCategory; label: string }> = [
  { id: "Language", label: "Language" },
  { id: "FrontEnd", label: "FrontEnd" },
  { id: "BackEnd", label: "BackEnd" },
  { id: "Database", label: "Database" },
  { id: "DevOps", label: "DevOps" },
  { id: "ETC", label: "ETC" },
];

export const SKILLS: Record<SkillCategory, SkillItem[]> = {
  Language: [
    {
      key: "js",
      title: "JavaScript",
      level: "Main",
      desc: "ES문법을 중시하며 기초레벨 부터 JS지식을 활용하여 사용합니다.",
    },
    {
      key: "ts",
      title: "TypeScript",
      level: "Main",
      desc: "정적, 제네릭, 라이브러리 등 다양한 방면에서 TS사용이 가능합니다.",
    },
  ],
  FrontEnd: [
    {
      key: "react",
      title: "React",
      level: "Main",
      desc: "버츄얼 돔과 react의 동작방식을 이해하고 있습니다. ",
      desc2: "대부분의 hook을 활용한 실전 활용이 가능합니다.",
    },
    {
      key: "next",
      title: "Next.js (App Router)",
      level: "Main",
      desc: "page/app router 활용이 가능하며, next.js의 장단점을 이해합니다.",
      desc2:
        "ssr, csr, isr, ssg 등 랜더링을 이해하며, api router를 사용한 API 작성및 middleware를 통한 토큰관리가 가능합니다. ",
    },
    {
      key: "css",
      title: "CSS",
      level: "Used",
      desc: "자주 사용하지는 않지만 주로 특정 라이브러리의 css 커스텀을 할 때 id와 합께 활용합니다.",
    },
    {
      key: "scss",
      title: "SCSS",
      level: "Main",
      desc: "자주 사용하며 다양한 실무 프로젝트에 사용했습니다.",
      desc2:
        "scss tree구조의 가시성과 네이밍에 신경쓰며 협력에 초점을 두며 사용합니다.",
    },
    {
      key: "styledcomponents",
      title: "styled-components",
      level: "Main",
      desc: "자주 사용하며 다양한 실무 프로젝트에 사용했습니다.",
      desc2: "css-in-js 방식을 이해하고 장점을 활용합니다.",
    },
    {
      key: "emotion",
      title: "Emotion",
      level: "Main",
      desc: "자주 사용하며 다양한 실무 프로젝트에 사용했습니다.",
      desc2: "css-in-js 방식을 이해하고 장점을 활용합니다.",
    },
    {
      key: "jotai",
      title: "Jotai",
      level: "Main",
      desc: "주로 사용하는 상태관리 라이브러리로 다수의 프로젝트에 사용했습니다.",
      desc2:
        "Atom단위 특징을 활용하여 가시성을 향상시키고 중복요소를 줄여 클린코드를 지향하며 사용합니다.",
    },
    {
      key: "recoil",
      title: "Recoil",
      level: "Used",
      desc: "jotai의 원형인 만큼 Atom단위기반 상태관리 라이브러리로서 활용이 가능합니다.",
    },
  ],
  BackEnd: [
    {
      key: "node",
      title: "Node.js",
      level: "Used",
      desc: "next.js의 api router를 사용하기위해 공부했습니다.",
      desc2:
        "backend의 코드를 보고 이해할 수 있으며 가벼운 수정이 가능한 수준 입니다.",
    },
  ],
  Database: [
    {
      key: "mysql",
      title: "MySQL",
      level: "Used",
      desc: "db를 통해 쿼리검색이 가능합니다. 공부중이기에 실무 세팅이 가능한 레벨은 아닙니다.",
      desc2: "db 연결을 통해 next.js api router와 연결 api제작이 가능합니다.",
    },
    {
      key: "firebase",
      title: "Firebase",
      level: "Used",
      desc: "신입시절 포폴 사이드 프로젝트 용으로 사용해본 경험이 있습니다.",
    },
  ],
  DevOps: [
    {
      key: "aws-ec2",
      title: "AWS EC2",
      level: "Used",
      desc: "next.js 프로젝트를 EC2에 배포해 본 경험이 있습니다.",
    },
    {
      key: "aws-s3",
      title: "AWS S3",
      level: "Used",
      desc: "s3로 파일관리용 서버를 만들어 api router와 함께 사용한 경험이 있습니다. ",
    },
    {
      key: "netlify",
      title: "Netlify",
      level: "Used",
      desc: "가벼운 프로젝트 들을 자동배포 돌릴 때 주로 사용합니다.",
    },
  ],
  ETC: [
    { key: "git", title: "Git", level: "Main" },
    {
      key: "github",
      title: "GitHub",
      level: "Main",
    },
    { key: "postman", title: "Postman", level: "Main" },
  ],
};
