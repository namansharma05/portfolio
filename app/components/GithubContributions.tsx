import { GitHubCalendar } from "react-github-calendar";

export const GithubContributions = () => {
  return (
    <div className="absolute top-[60%]">
      <GitHubCalendar username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!} />
    </div>
  );
};
