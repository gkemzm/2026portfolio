"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import classes from "./profile.module.scss";
// import ProfileBox from "./profileBox/profileBox";
import RevealSection from "../revealSection/revealSection";

const ProfileComponent = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero]",
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.08,
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={classes.wrap} aria-label="About Me">
      <header className={classes.header}>
        <div className={classes.kicker}>01.</div>
        <h2 className={classes.title}>About Me</h2>
        <div className={classes.rule} />
      </header>
      <RevealSection>
        <div className={classes.grid}>
          <div className={classes.cards}>
            <article className={classes.card} data-reveal="left">
              <div className={classes.cardTop}>
                <h3 className={classes.cardTitle}>저는 이런 사람입니다.</h3>
                <span className={classes.badge}>Mindset</span>
              </div>
              <ul className={classes.list}>
                <li>시간 약속을 중요하게 여깁니다.</li>
                <li>불가능해 보이는 상황에서도 끝까지 고민하고 실행합니다.</li>
                <li>말한 바에 책임감을 가지고 일합니다.</li>
              </ul>
            </article>

            <article className={classes.card} data-reveal="left">
              <div className={classes.cardTop}>
                <h3 className={classes.cardTitle}>저는 이런 개발자입니다.</h3>
                <span className={classes.badge}>Work Style</span>
              </div>
              <ul className={classes.list}>
                <li>
                  구조와 재사용성을 고려해 개발하는 프론트엔드 개발자입니다.
                </li>
                <li>
                  Next.js 기반 프로젝트에서 공용 컴포넌트와 구조를 설계하여 개발
                  속도와 유지보수성을 동시에 개선해왔습니다.
                </li>
                <li>
                  또한 AI와 자동화를 활용하여 반복 작업을 줄이고, 팀 전체
                  생산성을 높이는 방향으로 개발합니다.
                </li>
                <li>
                  다양한 직군과 협업하며 원만한 결과를 도출해 낼 수 있습니다.
                </li>
              </ul>
            </article>

            <article className={classes.card} data-reveal="left">
              <div className={classes.cardTop}>
                <h3 className={classes.cardTitle}>
                  프론트엔드 개발을 중심으로 다양한 서비스 구축을 경험했습니다.
                </h3>
                <span className={classes.badge}>Experience</span>
              </div>
              <ul className={classes.list}>
                <li>백오피스 시스템 개발을 통해 운영 비용 60% 절감</li>
                <li>사용자 경험 개선을 통해 사용자 수 1.5배 증가</li>
                <li>데이터 분석 및 A/B 테스트를 통해 사용자 3배 증가.</li>
                <li>
                  또한 기획, 데이터 분석, AI 활용 등 인접 영역까지 확장하며
                  서비스 단위로 문제를 해결하는 경험을 쌓았습니다.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </RevealSection>
    </section>
  );
};

export default ProfileComponent;
