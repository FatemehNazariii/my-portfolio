"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!glowRef.current) return;

      glowRef.current.style.transform = `translate(${e.clientX - 90}px, ${
        e.clientY - 90
      }px)`;
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed left-0 top-0 pointer-events-none z-0"
    >
      <div className="h-[180px] w-[180px] rounded-full bg-indigo-500/10 blur-[70px]" />
    </div>
  );
}