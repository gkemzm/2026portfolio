"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import classes from "./notion.module.scss";

const NotionComponent = () => {
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
      <div className={classes.title}>Stack</div>
      <div className={classes.contentArea}>
        <div className={classes.content}></div>
        <div className={classes.content}></div>
      </div>
    </div>
  );
};

export default NotionComponent;
