"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import classes from "./profile.module.scss";
import ProfileBox from "./profileBox/profileBox";

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
    <div className={classes.wrapper} ref={rootRef}>
      <div className={classes.title}>About Me</div>
      <div className={classes.contentArea}>
        <div className={classes.content}>
          <ProfileBox
            title="저는 이런 사람입니다."
            content={[
              "- 시간약속을 중요히 여깁니다.",
              "- 불가능한 상황에서 끊임없이 고민하고 행동하여 성취하고자 합니다.",
            ]}
          />
          <ProfileBox
            title="저는 이런 개발자입니다."
            content={[
              "- 웹 표준을 중요히 여기며, 동료와의 협업을 중시합니다.",
              "- 맡은바 책임을 다하며, 더 나은 퍼포먼스를 위해 노력합니다.",
            ]}
          />
          <ProfileBox
            title="저는 이런일을 했습니다."
            content={[
              "- FE개발 전반을 진행하였으며, 대부분 FE단일으로 프로젝트를 진행하였습니다.",
              "- BE, 기획자, 디자이너, 마케터, 클라이언트 등 개발자 비개발자 구분없이 다양한 사람들과 협업을 했습니다.",
              "- FE개발외적으로 데이터분석, AI, 화면기획을 진행했습니다.",
            ]}
          />
        </div>
        <div className={classes.content}></div>
      </div>
    </div>
  );
};

export default ProfileComponent;
