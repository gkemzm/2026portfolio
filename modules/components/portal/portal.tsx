"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }: { children: ReactNode }) {
  // client component라서 기본적으로 브라우저에서만 렌더링되지만,
  // 안전하게 document 체크만 해줌 (setState 없음)
  if (typeof document === "undefined") return null;
  return createPortal(children, document.body);
}
