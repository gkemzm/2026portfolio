export type ProjectTag = string;

export type ProjectLink = {
  label: "Demo" | "GitHub" | "Docs" | "Detail" | "Site";
  href: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string; // ex) Admin Dashboard / 예약·결제
  summary: string; // 1~2줄 요약
  highlights?: string[]; // 핵심 구현/성과 2~4개
  stack: string[]; // ex) ["Next.js", "TypeScript", "SCSS", "Jotai"]
  tags?: ProjectTag[]; // ex) ["Performance", "Refactor"]
  period?: string; // ex) 2024.10 - 2025.06
  role?: string; // ex) FE 70%
  links?: ProjectLink[];
  // 썸네일 이미지 쓰고 싶으면:
  // thumbnail?: { src: string; alt: string };
};

export const PROJECTS: Project[] = [
  {
    id: "zium-admin",
    title: "Zium Admin",
    subtitle: "운영형 어드민 / 상담·예약·결제 관리",
    summary:
      "지움이 사용하는 관리자 페이지를 Next.js App Router 기반으로 개발하고, 공통 컴포넌트화와 성능 개선을 진행했습니다.",
    highlights: [
      "프론트엔드 전반 개발, 화면 세부 기획, QC/QA 진행",
      "대용량 테이블/캘린더 렌더링 최적화(체감 성능 개선)",
      "middleWare 를통한 자동로그인/토큰 관리 설계",
      "api/roter를 활용한 외부 API 연결및 일부 API 제작",
      "공통 폼/모달/테이블 컴포넌트 표준화",
    ],
    stack: ["Next.js", "TypeScript", "SCSS", "Jotai", "MySQL", "Jenkins"],
    tags: ["Operations", "Performance", "Design System"],
    period: "2024.10 - 2025.09",
    role: "Frontend",
    links: [],
  },
  {
    id: "zium-user",
    title: "Zium User",
    subtitle: "솔루션 메인페이지 / BTC/BTB 상담신청 페이지",
    summary: "Zium의 유저페이지를 Next.js App Router 기반으로 개발하였습니다.",
    highlights: [
      "프론트엔드 전반 개발, 화면 세부 기획, QC/QA 진행",
      "css/animation 개선을 통한 UI/UX 향상",
      "Naver, Google 플랫폼 SEO 최적화를 통한 사용자 증가",
    ],
    stack: ["Next.js", "TypeScript", "SCSS", "Jotai", "MySQL", "Jenkins"],
    tags: ["Operations", "Performance", "Design System"],
    period: "2024.10 - 2025.09",
    role: "Frontend",
    links: [{ label: "Site", href: "https://ziumclean.com/" }],
  },
  {
    id: "Entizen",
    title: "Entizen",
    subtitle: "솔루션 메인페이지 /상담신청 페이지",
    summary:
      "전기차 충전기 중계 솔루션인 Entizen의 페이지를 Next.js App Router 기반으로 개발하였습니다.",
    highlights: [
      "프론트엔드 전반 개발",
      "ab테스트, gtm, ms clarity, GA4등 유입테스트 진행",
      "테스트를 기반으로 css/페이지구조 개선을 통한 유저 증가",
      "Naver, Google 플랫폼 SEO 최적화를 통한 사용자 증가",
      "japier 툴을 활용해 비개발자가 참고, 수정 할 수 있도록 기능 연동 / 스프레드시트 연동",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "SCSS",
      "emotion",
      "mui",
      "Jotai",
      "cafe24 배포",
    ],
    tags: ["Performance", "Design System"],
    period: "2024.04 - 2025.09",
    role: "Frontend",
    links: [{ label: "Site", href: "https://entizen.kr/prev/selection/" }],
  },
  {
    id: "daebee",
    title: "데이비",
    subtitle: "솔루션 메인페이지 /상담신청 페이지",
    summary:
      "xplat의 AI기반 고객 컨설팅 솔루션 페이지입니다. 통계 분석을 통한 클라이언트 분석이 주 목적으로 개발하였습니다.",
    highlights: [
      "프론트엔드 전반 개발",
      "퍼블리싱",
      "api/router를 통한 통계관련 api제작및 화면 반영",
    ],
    stack: ["Next.js", "TypeScript", "SCSS", "Jotai", "jenkins"],
    tags: ["Performance", "Design System"],
    period: "2024.04 - 2025.09",
    role: "Frontend",
    links: [],
  },
  {
    id: "xplat",
    title: "XPLAT 홈페이지",
    subtitle: "솔루션 메인페이지",
    summary:
      "그로스해킹 기반 컨설팅 회사인 xPlat의 메인페이지를 GSAP 라이브러리를 기반으로 개발하였습니다.",
    highlights: ["프론트엔드 전반 개발", "퍼블리싱"],
    stack: ["Next.js", "TypeScript", "SCSS", "Jotai"],
    tags: ["Performance"],
    period: "2024.04 - 2025.09",
    role: "Frontend",
    links: [{ label: "Site", href: "https://www.x-plat.io/" }],
  },
  {
    id: "Korly Mally",
    title: "Korly Mally",
    subtitle: "e-commerce 메인 페이지",
    summary:
      "global, e-commerce인 korlymally입니다. next.js page/router기반으로 만들었습니다.",
    highlights: ["프론트엔드 사용자 페이지및 마이페이지 담당"],
    stack: ["Next.js", "styled-component", "recoil", "i18n"],
    tags: ["Performance"],
    period: "2023.01 - 2023.09",
    role: "Frontend",
    links: [
      {
        label: "Site",
        href: "https://korlymally.kr/?srsltid=AfmBOoo7yL6dZmb3INFkawqFnqMTaD8EWf3t-uFjYDxM4BnXr_07cdf9",
      },
    ],
  },
];
