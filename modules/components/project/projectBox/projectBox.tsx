import styles from "./projectBox.module.scss";
import type { Project } from "./projectData";
import ProjectGallery from "./projectGallery";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className={styles.card} aria-label={`Project ${project.title}`}>
      <div className={styles.top}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.role ? (
            <span className={styles.role}>{project.role}</span>
          ) : null}
        </div>

        {project.subtitle ? (
          <p className={styles.subtitle}>{project.subtitle}</p>
        ) : null}

        <p className={styles.summary}>{project.summary}</p>

        {(project.period || project.tags?.length) && (
          <div className={styles.metaRow}>
            {project.period ? (
              <span className={styles.period}>{project.period}</span>
            ) : null}
            {project.tags?.length ? (
              <ul className={styles.tags} aria-label="tags">
                {project.tags.map((t) => (
                  <li key={t} className={styles.tag}>
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
      </div>

      {project.highlights?.length ? (
        <ul className={styles.highlights} aria-label="highlights">
          {project.highlights.map((h, idx) => (
            <li key={`${project.id}-h-${idx}`} className={styles.highlight}>
              <span className={styles.bullet} aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className={styles.bottom}>
        <ul className={styles.stack} aria-label="stack">
          {project.stack.map((s) => (
            <li key={`${project.id}-s-${s}`} className={styles.stackItem}>
              {s}
            </li>
          ))}
        </ul>

        {project.links?.length ? (
          <div className={styles.links}>
            {project.links.map((l) => (
              <a
                key={`${project.id}-l-${l.label}`}
                className={styles.link}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {l.label}
                <span className={styles.linkArrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
      {project.images && <ProjectGallery images={project.images} />}
    </article>
  );
};

export default ProjectCard;
