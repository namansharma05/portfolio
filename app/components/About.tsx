import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const About = () => {
  return (
    <div className="max-w-fit flex flex-col items-center lg:items-start text-center lg:text-left">
      <h1 className="max-w-fit lg:text-4xl md:text-3xl text-2xl font-bold">
        {process.env.NEXT_PUBLIC_NAME}
      </h1>
      <h2 className="max-w-fit lg:text-xl md:text-lg text-base">
        {process.env.NEXT_PUBLIC_DESIGNATION}
      </h2>
      <p className="max-w-[45ch] text-gray-500 lg:text-lg md:text-base text-sm lg:text-justify mt-4 px-4 lg:px-0">
        {process.env.NEXT_PUBLIC_ABOUT_ME_DESCRIPTION}
      </p>
      <div className="max-w-fit flex justify-center lg:justify-start gap-4 mt-4">
        <a
          href="https://github.com/namansharma05"
          target="_blank"
          className="cursor-default"
        >
          <div className="p-3 bg-gray-100 dark:bg-zinc-800/50 rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-zinc-200 dark:hover:bg-zinc-700">
            <VscGithub
              size={32}
              className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
            />
          </div>
        </a>

        <a
          href="https://x.com/thecodeprotocol"
          target="_blank"
          className="cursor-default"
        >
          <div className="p-3 bg-gray-100 dark:bg-zinc-800/50 rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-zinc-200 dark:hover:bg-zinc-700">
            <FaXTwitter
              size={32}
              className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
            />
          </div>
        </a>

        {/* <a href="" target="_blank">
          <div className="p-3 bg-gray-100 dark:bg-zinc-800/50 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
            <FaLinkedin
              size={32}
              className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
            />
          </div>
        </a> */}
      </div>
    </div>
  );
};
