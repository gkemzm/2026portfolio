"use client";

import { useEffect, useState } from "react";
import styles from "./intro.module.scss";

type Props = {
  durationMs?: number; // 1200~1800 추천
  onFinish?: () => void; // ✅ 로딩 종료 후 실행
};

export default function IntroLoader({ durationMs = 1400, onFinish }: Props) {
  const [visible, setVisible] = useState(true); // ✅ 매번 보여야 하니 기본 true
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // ✅ fade out 시작
    const t1 = window.setTimeout(() => {
      setLeaving(true);
    }, durationMs);

    // ✅ fade out 끝나고 제거 + 콜백 실행
    const t2 = window.setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, durationMs + 350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [durationMs, onFinish]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.overlay} ${leaving ? styles.leaving : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className={styles.panel}>
        <div className={styles.brandRow}>
          <div className={styles.mark} aria-hidden="true" />
          <div className={styles.brandText}>
            <div className={styles.brandTitle}>Loading</div>
            <div className={styles.brandSub}>Preparing experience</div>
          </div>
        </div>

        <div className={styles.loaderRow}>
          <div className={styles.ring} aria-hidden="true" />
          <div className={styles.progressLine} aria-hidden="true" />
        </div>

        <p className={styles.caption}>Next.js · TypeScript · GSAP</p>
      </div>
    </div>
  );
}
