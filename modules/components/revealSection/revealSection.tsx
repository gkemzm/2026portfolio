"use client";

import useScrollReveal from "@/modules/hook/useScrollReveal";
import { ReactNode, useRef } from "react";

export default function RevealSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);

  useScrollReveal(ref);

  return <section ref={ref}>{children}</section>;
}
