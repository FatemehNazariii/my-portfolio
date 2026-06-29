"use client";

import { useEffect, useState } from "react";

export default function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0b0f17]">
        <div className="text-indigo-400 text-lg animate-pulse">
          Loading Portfolio...
        </div>
      </div>
    );
  }

  return <>{children}</>;
}