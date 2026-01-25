"use client";

import { ProfilePic } from "./components/ProfilePic";
import { About } from "./components/About";
import { GithubContributions } from "./components/GithubContributions";
import { Technologies } from "./components/Technologies";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-center">
        <ProfilePic />
        <About />
        <GithubContributions />
        <Technologies />
      </div>
    </main>
  );
}
