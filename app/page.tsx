"use client";

import { ProfilePic } from "./components/ProfilePic";
import { About } from "./components/About";
import { GithubContributions } from "./components/GithubContributions";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center w-full px-4 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="flex justify-center items-center">
            <ProfilePic />
          </div>
          <div className="flex justify-center lg:justify-start items-center">
            <About />
          </div>
        </div>

        <div className="w-full mt-10 lg:mt-10">
          <GithubContributions />
        </div>

        <div className="w-full mt-10 lg:mt-10">
          <Technologies />
        </div>
        <div className="w-full mt-10 lg:mt-10">
          <Projects />
        </div>
      </div>
    </main>
  );
}
