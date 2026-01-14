"use client";

import styles from "./home.module.scss";

const HomeComponent = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Intro">
        <div className={styles.inner}>
          <p className={styles.kicker}>00.</p>

          <h1 className={styles.title}>
            안녕하세요. FE 개발자 <br />
            박범수입니다.
          </h1>

          <p className={styles.desc}>
            웹 포트폴리오를 방문해주셔서 감사합니다.
          </p>

          <div className={styles.ctaRow}>
            {/* 노션 */}
            <a
              className={styles.ctaGhost}
              href="https://wandering-triangle-f12.notion.site/2b0c8c71479080089cd4d3a2fbd12440?pvs=74"
              target="_blank"
              rel="noreferrer"
            >
              이력서 {"(노션)"}
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </a>
            <a
              className={styles.ctaGhost}
              href="https://wandering-triangle-f12.notion.site/784394d8be5e4352870fdb62273ce6a9?v=d47147bbe53948d8b7807e8571c99b98&pvs=74"
              target="_blank"
              rel="noreferrer"
            >
              기술 블로그 {"(노션)"}
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Tell</div>
              <div className={styles.metaValue}>010-5197-9336</div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>E-mail</div>
              <div className={styles.metaValue}>gkemzm@gmail.com</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>E-mail</div>
              <div className={styles.metaValue}>gkemzm@gmail.com</div>
            </div>
          </div>

          <div className={styles.rule} />
        </div>
      </section>
    </main>
  );
};

export default HomeComponent;
