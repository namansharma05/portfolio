"use client";

import { ProfilePic } from "./components/ProfilePic";
import { About } from "./components/About";
import { GithubContributions } from "./components/GithubContributions";
import { Technologies } from "./components/Technologies";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center max-w-full mt-[5%]">
        <div className="flex lg:flex-row md:flex-col flex-col lg:gap-x-20 md:gap-y-10 gap-y-5 justify-center items-center">
          <ProfilePic />
          <About />
        </div>
        <div className="flex justify-center mt-12">
          <GithubContributions />
        </div>
        <Technologies />
      </div>
    </main>
  );
}
