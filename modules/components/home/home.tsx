"use client";

import classes from "./home.module.scss";

const HomeComponent = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.center}>
        <div className={classes.small}>안녕하세요. FE 개발자</div>
        <div className={classes.large}>박범수 입니다. </div>
        <div className={classes.medium}>
          웹 포트폴리오를 방문해주셔서 감사합니다.
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
