import { GitHubCalendar } from "react-github-calendar";

export const GithubContributions = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="overflow-x-auto custom-scrollbar flex justify-center py-4">
        <div className="min-w-fit">
          <GitHubCalendar username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!} />
        </div>
      </div>
    </div>
  );
};
