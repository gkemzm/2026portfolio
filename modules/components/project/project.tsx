"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import classes from "./project.module.scss";
import ProjectCard from "./projectBox/projectBox";
import { PROJECTS } from "./projectBox/projectData";
import RevealSection from "../revealSection/revealSection";

const ProjectComponent = () => {
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
      <header className={classes.header}>
        <div className={classes.kicker}>03.</div>
        <h2 className={classes.title}>Project</h2>
        <div className={classes.rule} />
      </header>
      <RevealSection>
        <div className={classes.list}>
          {PROJECTS.map((p) => (
            <div key={p.id} data-reveal="left">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </RevealSection>
    </div>
  );
};

export default ProjectComponent;
