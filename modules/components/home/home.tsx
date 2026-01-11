"use client";

import classes from "./home.module.scss";

const HomeComponent = () => {
  return (
    <div className={classes.wrapper}>
      <div>안녕하세요.</div>
      <div>FE 개발자 박범수</div>
      <div>포트폴리오입니다. 방문해주셔서 감사합니다.</div>
    </div>
  );
};

export default HomeComponent;
