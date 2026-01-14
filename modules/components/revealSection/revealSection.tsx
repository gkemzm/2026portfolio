"use client";

import useScrollReveal from "@/modules/hook/useScrollReveal";
import { ReactNode, useRef } from "react";

export default function RevealSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  useScrollReveal(ref);

  return <section ref={ref}>{children}</section>;
}
