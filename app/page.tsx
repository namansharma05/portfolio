"use client";

import { useEffect, useRef } from "react";
import { ProfilePic } from "./components/ProfilePic";
import { About } from "./components/About";
import { GithubContributions } from "./components/GithubContributions";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <div
        ref={cursorRef}
        className="sphere transform -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div className="flex items-center justify-center">
        <ProfilePic />
        <About />
        <GithubContributions />
      </div>
    </main>
  );
}
