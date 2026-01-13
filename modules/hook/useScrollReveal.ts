"use client";

import { useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  selector?: string; // 기본: [data-reveal]
  once?: boolean; // 한번만 실행
  distance?: number; // 이동 px
  duration?: number;
  stagger?: number;
};

export default function useScrollReveal(
  scopeRef: RefObject<HTMLElement> | null,
  {
    selector = "[data-reveal]",
    once = true,
    distance = 40,
    duration = 0.8,
    stagger = 0.08,
  }: RevealOptions = {}
) {
  useLayoutEffect(() => {
    if (scopeRef === null || !scopeRef.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);

      targets.forEach((el) => {
        const dir = el.dataset.reveal ?? "left"; // left | right | up | down

        const fromVars: gsap.TweenVars = { autoAlpha: 0 };
        if (dir === "left") fromVars.x = -distance;
        if (dir === "right") fromVars.x = distance;
        if (dir === "up") fromVars.y = distance;
        if (dir === "down") fromVars.y = -distance;

        gsap.fromTo(el, fromVars, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration,
          ease: "power2.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "top 60%",
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
            // markers: true, // 디버깅 필요하면 켜기
          },
        });
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [scopeRef, selector, once, distance, duration, stagger]);
}
