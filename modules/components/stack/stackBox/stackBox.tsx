import { useMemo, useState } from "react";
import styles from "./stackBox.module.scss";
import { SKILL_CATEGORIES, SKILLS, SkillCategory } from "./skillsData";
import Image from "next/image";

function LevelBadge({ level }: { level?: "Main" | "Used" | "Tried" }) {
  if (!level) return null;
  const cls =
    level === "Main"
      ? styles.badgeMain
      : level === "Used"
      ? styles.badgeUsed
      : styles.badgeTried;

  return <span className={`${styles.badge} ${cls}`}>{level}</span>;
}

export default function SkillsSection() {
  const [active, setActive] = useState<SkillCategory>("FrontEnd");

  const items = useMemo(() => SKILLS[active] ?? [], [active]);

  return (
    <section className={styles.wrap} aria-label="Skills">
      <div className={styles.grid}>
        {/* left nav */}
        <nav className={styles.nav} aria-label="Skill categories">
          <ul className={styles.navList}>
            {SKILL_CATEGORIES.map((c) => {
              const isActive = c.id === active;
              return (
                <li key={c.id} className={styles.navItem}>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${
                      isActive ? styles.navBtnActive : ""
                    }`}
                    onClick={() => setActive(c.id)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {c.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* content */}
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <h3 className={styles.contentTitle}>
              Stack <span className={styles.accent}>@ {active}</span>
            </h3>
          </div>

          <ul className={styles.items}>
            {items.map((it) => (
              <li key={it.key} className={styles.item}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <div className={styles.ringOuter} />
                  <div className={styles.ringInner} />
                  <div className={styles.icon}>
                    <Image
                      src={`/icons/${it.key}.svg`}
                      alt=""
                      loading="lazy"
                      draggable={false}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                <div className={styles.meta}>
                  <div className={styles.metaTop}>
                    <div className={styles.itemTitle}>{it.title}</div>
                    <LevelBadge level={it.level} />
                  </div>
                  {it.desc ? (
                    <>
                      <p className={styles.desc}>{it.desc}</p>
                      <p className={styles.desc}>{it.desc2}</p>
                    </>
                  ) : (
                    <p className={styles.descMuted}>
                      {/* optional placeholder text - remove if you prefer empty */}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
