"use client";

import type { MouseEvent } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  /** id of the section to scroll to */
  to: string;
  label?: string;
  className?: string;
  /** use on dark backgrounds */
  light?: boolean;
};

export default function ScrollCue({ to, label = "See more", className = "", light = false }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(to);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    // keep the URL hash in sync without a jump
    window.history.replaceState(null, "", `#${to}`);
  };

  const color = light
    ? "text-white/80 hover:text-white"
    : "text-slate-500 hover:text-star-blue";
  const ring = light
    ? "border-white/40 bg-white/10 group-hover:bg-white/20"
    : "border-slate-200 bg-white group-hover:border-star-blue/40 group-hover:bg-blue-50";

  return (
    <div className={`flex justify-center ${className}`}>
      <a
        href={`#${to}`}
        onClick={handleClick}
        className={`group inline-flex flex-col items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${color}`}
        aria-label={`${label} – scroll to next section`}
      >
        <span>{label}</span>
        <span
          className={`flex h-10 w-10 animate-bounce items-center justify-center rounded-full border shadow-soft transition-colors ${ring}`}
          aria-hidden="true"
        >
          <ChevronDown className="h-5 w-5" />
        </span>
      </a>
    </div>
  );
}
