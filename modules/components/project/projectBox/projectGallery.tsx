"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import styles from "./projectGallery.module.scss";
import type { ProjectImage } from "./projectData";
import Portal from "../../portal/portal";

export default function ProjectGallery({
  images,
}: {
  images?: ProjectImage[];
}) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const hasImages = !!images?.length;
  const active = useMemo(
    () => (hasImages ? images![activeIdx] : null),
    [images, activeIdx, hasImages]
  );

  // ESC 닫기 + body scroll lock + 키보드 이동
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight")
        setActiveIdx((v) => (images ? (v + 1) % images.length : v));
      if (e.key === "ArrowLeft")
        setActiveIdx((v) =>
          images ? (v - 1 + images.length) % images.length : v
        );
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, images]);

  if (!hasImages) return null;

  return (
    <div className={styles.wrap} aria-label="Project images">
      {/* ✅ strip (카드 안) */}
      <div className={styles.strip} role="list">
        {images!.map((img, idx) => (
          <button
            key={`${img.src}-${idx}`}
            type="button"
            className={styles.thumb}
            onClick={() => {
              setActiveIdx(idx);
              setOpen(true);
            }}
            aria-label={`Open image ${idx + 1}`}
          >
            <span className={styles.thumbInner}>
              <Image
                src={img.src}
                alt={img.alt}
                width={img.w ?? 560}
                height={img.h ?? 350}
                className={styles.thumbImg}
                sizes="(max-width: 520px) 220px, 260px"
              />
            </span>
          </button>
        ))}
      </div>

      {/* ✅ modal은 무조건 body로 포탈 렌더링 (항상 화면 중앙) */}
      {open && active && (
        <Portal>
          <div
            className={styles.portal}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            {/* overlay */}
            <button
              type="button"
              className={styles.overlay}
              aria-label="Close modal"
              onClick={() => setOpen(false)}
            />

            {/* center */}
            <div className={styles.modalCenter}>
              <div className={styles.modalInner}>
                <div className={styles.modalTop}>
                  <div className={styles.caption}>{active.alt}</div>
                  <button
                    className={styles.close}
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className={styles.viewer}>
                  <Image
                    src={active.src}
                    alt={active.alt}
                    width={active.w ?? 1440}
                    height={active.h ?? 900}
                    className={styles.viewerImg}
                    sizes="(max-width: 520px) 92vw, (max-width: 1024px) 88vw, 980px"
                    priority
                  />
                </div>

                <div className={styles.nav}>
                  <button
                    type="button"
                    className={styles.navBtn}
                    onClick={() =>
                      setActiveIdx(
                        (v) => (v - 1 + images!.length) % images!.length
                      )
                    }
                    aria-label="Prev"
                  >
                    ←
                  </button>
                  <div className={styles.navHint}>ESC 닫기 · ←/→ 이동</div>
                  <button
                    type="button"
                    className={styles.navBtn}
                    onClick={() =>
                      setActiveIdx((v) => (v + 1) % images!.length)
                    }
                    aria-label="Next"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
