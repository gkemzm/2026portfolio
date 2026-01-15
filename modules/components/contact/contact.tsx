"use client";

import { useRef, useState } from "react";
import styles from "./contact.module.scss";

type SubmitData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [submitData, setSubmitData] = useState<SubmitData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const onChange = (key: keyof SubmitData, value: string) => {
    setSubmitData((prev) => ({ ...prev, [key]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setStatus("sending");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      const contentType = res.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await res.json()
        : { ok: false };

      if (!res.ok || !data.ok) throw new Error(data?.error || "failed");

      setStatus("success");

      // ✅ 여기!
      formRef.current.reset();
      setSubmitData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.wrap} aria-label="Contact">
      <header className={styles.header}>
        <div className={styles.kicker}>04.</div>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.rule} />
      </header>
      <div className={styles.contents}>
        <div className={styles.card}>
          <div className={styles.copy}>
            <p className={styles.lead}>
              함께 일하며 문제를 해결하는 프론트엔드 개발자입니다.
            </p>
            <p className={styles.sub}>
              새로운 기회나 협업 제안이 있다면 편하게 연락 주세요.
            </p>

            <div className={styles.quick}>
              <a className={styles.quickLink} href="mailto:gkemzm@gmail.com">
                gkemzm@gmail.com
              </a>
              {/* <span className={styles.dot} aria-hidden="true" /> */}
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="user_name">
                Name
              </label>
              <input
                id="user_name"
                className={styles.input}
                type="text"
                name="user_name"
                placeholder="ex) 홍길동"
                required
                value={submitData.name}
                onChange={(e) => onChange("name", e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="user_email">
                E-mail
              </label>
              <input
                id="user_email"
                className={styles.input}
                type="email"
                name="user_email"
                placeholder="ex) yourEmailId@example.com"
                required
                value={submitData.email}
                onChange={(e) => onChange("email", e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className={styles.textarea}
                name="message"
                placeholder="간단히 메시지를 남겨주세요."
                required
                value={submitData.message}
                onChange={(e) => onChange("message", e.target.value)}
              />
            </div>

            <div className={styles.actions}>
              <button
                className={styles.button}
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Submit"}
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </button>

              {status === "success" && (
                <p className={`${styles.notice} ${styles.success}`}>
                  연락주셔서 감사합니다. 빠른 시일 내에 답변드리겠습니다.
                </p>
              )}
              {status === "error" && (
                <p className={`${styles.notice} ${styles.error}`}>
                  전송에 실패했어요. 잠시 후 다시 시도하거나 이메일로 연락
                  주세요.
                </p>
              )}
            </div>
          </form>
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerText}>Built with Next.js · TypeScript</p>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
