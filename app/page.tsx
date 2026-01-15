"use client";
import HomeComponent from "@/modules/components/home/home";
import Header from "@/modules/layout/header/header";
import classes from "./page.module.scss";
import ProfileComponent from "@/modules/components/profile/profile";
import StackComponent from "@/modules/components/stack/stack";
import ProjectComponent from "@/modules/components/project/project";
import ContactSection from "@/modules/components/contact/contact";
import IntroLoader from "@/modules/components/intro/intro";
import { useLayoutEffect, useRef, useState } from "react";
export default function Home() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [introDone] = useState(false);

  // ✅ 로딩 끝난 뒤에만 “섹션 이어서 등장”
  useLayoutEffect(() => {
    if (!introDone || !rootRef.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-enter]");

      // 초기 상태 세팅(깜빡임 방지)
      gsap.set(targets, { autoAlpha: 0, x: -48 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.75 },
      });

      tl.to(targets, {
        autoAlpha: 1,
        x: 0,
        stagger: 0.14, // ✅ 이어지는 느낌
      });
    }, rootRef);

    return () => ctx.revert();
  }, [introDone]);

  return (
    <div className={classes.wrapper}>
      <IntroLoader durationMs={1400} />
      <div className={classes.header}>
        <Header />
      </div>
      <div id="intro" className={classes.itemlayer}>
        <HomeComponent />
      </div>
      <div id="aboutme" className={classes.itemlayer}>
        <ProfileComponent />
      </div>
      <div id="stack" className={classes.itemlayer}>
        <StackComponent />
      </div>
      <div id="project" className={classes.itemlayer}>
        <ProjectComponent />
      </div>
      <div id="contact" className={classes.itemlayer}>
        <ContactSection />
      </div>
    </div>
  );
}
