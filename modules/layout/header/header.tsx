"use client";

import { headerItem } from "./data";
import classes from "./header.module.scss";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const go = (id: string) => {
    gsap.to(window, {
      duration: 0.8,
      ease: "power2.out",
      scrollTo: { y: `#${id}`, offsetY: 84 }, // 헤더 높이
    });
  };

  return (
    <div className={classes.wrapper}>
      {headerItem.map((item, idx) => {
        const label = item.toUpperCase();
        return (
          <div className={classes.info} key={item} onClick={() => go(item)}>
            <span>0{idx}.&nbsp;</span>
            {label}
          </div>
        );
      })}
    </div>
  );
};
export default Header;
