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
                <li>웹 표준과 협업을 중시하고, 코드를 읽기 쉽게 유지합니다.</li>
                <li>성능/품질을 위해 리팩터링을 꾸준히 수행합니다.</li>
                <li>새로운 기술을 필요에 맞게 빠르게 흡수합니다.</li>
              </ul>
            </article>

            <article className={classes.card} data-reveal="left">
              <div className={classes.cardTop}>
                <h3 className={classes.cardTitle}>저는 이런 일을 했습니다.</h3>
                <span className={classes.badge}>Experience</span>
              </div>
              <ul className={classes.list}>
                <li>
                  FE 개발 전반을 담당하며, 다수 프로젝트를 FE 중심으로
                  진행했습니다.
                </li>
                <li>
                  BE/기획/디자인/마케팅/클라이언트 등 다양한 직군과
                  협업했습니다.
                </li>
                <li>
                  백오피스·이커머스·통계·설문 등 도메인 프로젝트 경험이
                  있습니다.
                </li>
                <li>
                  데이터 분석/AI/화면 기획 등 인접 업무도 함께 수행했습니다.
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
