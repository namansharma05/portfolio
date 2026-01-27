import { GitHubCalendar } from "react-github-calendar";

export const GithubContributions = () => {
  return (
    <div className="max-w-[50%] md:max-w-[70%] lg:max-w-[100%]">
      <GitHubCalendar username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!} />
    </div>
  );
};
